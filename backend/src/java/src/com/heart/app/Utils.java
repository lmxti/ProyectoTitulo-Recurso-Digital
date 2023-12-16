package com.heart.app;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.fasterxml.jackson.databind.SerializationFeature;

import java.util.ArrayList;
import java.util.List;
import java.util.Iterator;
import java.lang.reflect.Field;
import java.lang.reflect.AccessibleObject;
import java.lang.reflect.Array;
import java.lang.ref.WeakReference;

public class Utils {
    public static Utils current;
    private List<ObjectWrapper> objectList = new ArrayList<>();

    public Utils() {
        current = this;
    }

    private Object emptyObject = new Object();
    int frames = 0;

    public static void Mostrar(Object object) {
        System.out.println(toJson(object));
    }

    public void printObjectList() {
        if (objectList.size() == 0) {
            return;
        }

        System.out.println("{ \"data\": ");
        Mostrar(objectList);
        System.out.println(", \"maxFrames\":" + frames + "}");
    }

    // Method to record changes for an object
    public void storeObject(Object object) {
        String nameType = object.getClass().getSimpleName();
        int id = object.hashCode();

        WeakReference<Object> weakReference = new WeakReference<>(object);

        ObjectWrapper toSave = new ObjectWrapper(id, nameType, weakReference, frames, getChilds(object));
        objectList.add(toSave);
    }

    public void saveObjectsState() {
        // Explicitly trigger garbage collection (not recommended in production code)
        System.gc();

        for (int i = 0; i < objectList.size(); i++) {
            ObjectWrapper toCheck = objectList.get(i);
            if (toCheck.value.get() != null) {
                toCheck.setChilds(getChilds(toCheck.value.get()));
            }
        }

        for (int i = 0; i < objectList.size(); i++) {
            ObjectWrapper toCheck = objectList.get(i);
            if (toCheck.value.get() != null) {
                Object changed = getChanges(toCheck.id, toCheck.lastValue, toCheck.value.get());
                toCheck.changes.add(changed);

                if (changed != null) {
                    toCheck.setLastValue(setChanges(changed, toCheck.lastValue));
                }
            }
        }
        frames++;
    }

    // Function to find the index of a Person by name
    public int getObjectIndex(int id) {
        for (int i = 0; i < objectList.size(); i++) {
            if (objectList.get(i).id == id) {
                return i;
            }
        }
        return -1; // Name not found in the list
    }

    public int getObjectIndex(Object object) {
        for (int i = 0; i < objectList.size(); i++) {
            if (objectList.get(i).value.get() == object) {
                return i;
            }
        }

        return -1;
    }

    public static String toJson(Object object) {

        try {
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
            return objectMapper.writeValueAsString(object);
        } catch (Exception e) {
            e.printStackTrace();
            return "{ Error : \"" + e.getMessage() + "\"}";
        }

    }

    /*
     * public static Object toObject(String jsonData) {
     * try {
     * ObjectMapper objectMapper = new ObjectMapper();
     * return objectMapper.readValue(jsonData, Object.class);
     * } catch (Exception e) {
     * e.printStackTrace();
     * return "{ Error : \"" + e.getMessage() + "\"}";
     * }
     * }
     */

    public static Object CloneObject(Object obj) {
        try {
            ObjectMapper mapper = new ObjectMapper();

            mapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
            return mapper.treeToValue(mapper.valueToTree(obj), Object.class);
        } catch (Exception e) {
            e.printStackTrace();
            return "{ Error : \"" + e.getMessage() + "\"}";
        }
    }

    public List<Integer> getChilds(Object obj) {
        try {

            // Create ObjectMapper
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);

            // Parse JSON strings into JSON objects
            JsonNode json1 = objectMapper.valueToTree(obj);

            Iterator<String> fieldNamesIterator = json1.fieldNames();

            List<Integer> childs = new ArrayList<>();

            while (fieldNamesIterator.hasNext()) {
                String fieldname = fieldNamesIterator.next();
                JsonNode fieldObj = json1.get(fieldname);
                if (!fieldObj.isValueNode()) {

                    if (fieldObj.isArray()) {
                        int length = fieldObj.size();
                        if (length != 0) {
                            JsonNode arrayElementNode = fieldObj.get(0);

                            if (!arrayElementNode.isValueNode()) {

                                Field field = obj.getClass().getDeclaredField(fieldname);
                                field.setAccessible(true);

                                // Get the array from the object
                                Object arrayObject = field.get(obj);

                                // If the array is not null and it is an array type
                                if (arrayObject != null && arrayObject.getClass().isArray()) {
                                    for (int i = 0; i < length; i++) {

                                        Object arrayElement = Array.get(arrayObject, i);
                                        if (arrayElement != null) {
                                            childs.add(arrayElement.hashCode());

                                        }
                                    }
                                }

                            }
                        }

                    } else {
                        Field field = obj.getClass().getDeclaredField(fieldname);
                        field.setAccessible(true);

                        childs.add(field.get(obj).hashCode());

                    }

                }
            }

            return childs;

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
            return null;
        }
    }

    int checkIfChild(int objId) {

        for (int i = 0; i < objectList.size(); i++) {
            for (int j = 0; j < objectList.get(i).childs.size(); j++) {
                if (objectList.get(i).childs.get(j) == objId) {
                    return objectList.get(i).id;
                }
            }
        }

        return -1;
    }

    public Object getChanges(int objId, Object stateA, Object stateB) {

        try {
            boolean isChanged = false;

            // Create ObjectMapper
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);

            // Create a new JSON object to store the changed properties
            JsonNode prevProperties;
            ObjectNode changedProperties = objectMapper.valueToTree(stateB).deepCopy();
            changedProperties.put("parent", checkIfChild(objId));

            // Create a new JSON object to store the changed properties
            ObjectNode newVals = objectMapper.createObjectNode();

            if (stateA != null) {
                // Create a new JSON object to store the changed properties
                prevProperties = objectMapper.valueToTree(stateA);

                Iterator<String> fieldNamesIterator = prevProperties.fieldNames();

                while (fieldNamesIterator.hasNext()) {
                    String fieldName = fieldNamesIterator.next();
                    if (!prevProperties.get(fieldName).equals(changedProperties.get(fieldName))) {
                        newVals.put(fieldName, changedProperties.get(fieldName));
                        isChanged = true;
                    }
                }

            } else {
                return objectMapper.treeToValue(changedProperties, Object.class);
            }

            if (isChanged) {
                return objectMapper.treeToValue(newVals, Object.class);
            } else {
                return null;

            }
        } catch (Exception e) {
            e.printStackTrace();
            return "{ Error : \"" + e.getMessage() + "\"}";
        }
    }

    public Object setChanges(Object stateA, Object stateB) {

        try {
            boolean isChanged = false;

            // Create ObjectMapper
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);

            JsonNode prevProperties = objectMapper.valueToTree(stateA); // new changes

            ObjectNode changedProperties = null; // prevValue

            if (stateB != null) {
                // Create a new JSON object to store the changed properties
                changedProperties = objectMapper.valueToTree(stateB);

                Iterator<String> fieldNamesIterator = prevProperties.fieldNames();

                while (fieldNamesIterator.hasNext()) {
                    String fieldName = fieldNamesIterator.next();
                    if (!prevProperties.get(fieldName).equals(changedProperties.get(fieldName))) {
                        changedProperties.set(fieldName, prevProperties.get(fieldName));
                        isChanged = true;
                    }
                }
                if (isChanged) {
                    return objectMapper.treeToValue(changedProperties, Object.class);
                }
            } else {
                changedProperties = objectMapper.valueToTree(stateA).deepCopy();
                return objectMapper.treeToValue(changedProperties, Object.class);
            }

            return stateB;

        } catch (Exception e) {
            e.printStackTrace();
            return "{ Error : \"" + e.getMessage() + "\"}";
        }
    }

    static class ObjectWrapper {
        private int id; // Unique identifier for the object
        private String type;
        private WeakReference<Object> value; // The user's object (e.g., Circle)
        private Object lastValue;

        private int startFrame;
        private List<Object> changes = new ArrayList<>();
        private List<Integer> childs;

        public ObjectWrapper(int id, String nameType, WeakReference<Object> object, int frame, List<Integer> childs) {

            this.id = id;
            type = nameType;
            value = object;
            startFrame = frame;
            this.childs = childs;
        }

        public void setLastValue(Object lVal) {
            lastValue = lVal;
        }

        public int getId() {
            return this.id;
        }

        public String getType() {
            return type;
        }

        public Object getValue() {
            return value.get();
        }

        public List<Object> getChanges() {
            return changes;
        }

        public int getStartFrame() {
            return startFrame;
        }

        public List<Integer> getChilds() {
            return childs;
        }

        public void setChilds(List<Integer> childs) {
            this.childs = childs;
        }

        public Object getLastValue() {
            return lastValue;
        }

    }
}
