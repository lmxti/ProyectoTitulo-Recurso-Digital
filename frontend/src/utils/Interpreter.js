import React from "react";

const primitivos = ['Cuadrado', 'Circulo', 'Texto']
const objImgs = [
    { type: 'Gato', img: '/objects/gato.png' },
    { type: 'Auto', img: '/objects/autoRojo.png' },
    { type: 'Bus', img: '/objects/bus.png' },
    { type: 'Pasajero', img: '/objects/pasajero.png' },
    { type: 'Conductor', img: '/objects/conductor.png' },
]

const specialBehavior = [
    { type: 'Pasajero', with: 'Bus', toAdd: [{ type: 0, value: { ratio: 0.2 } }, { type: 2, value: { specialType: 0, extra: 0 } }] },
    { type: 'Conductor', with: 'Bus', toAdd: [{ type: 0, value: { ratio: 0.2 } }, { type: 2, value: { specialType: 0, extra: 1 } }] },
    { type: 'Bus', with: 'Pasajero', toAdd: [{ type: 0, value: { ratio: 1.5 } }] },
    {
        type: 'Auto', with: undefined, toAdd: [{
            type: 1, 
            value: { 
                toPass: [{ variable: "color", value: "color" }, { variable: "texto", value: "modelo" }], 
                toPut: { tamano: 100, localY: 0.5 }, 
                nameType: "Texto" }
        }]
    },

]

let specialObjects = []

const Interpreter = async (objectsList, maxFrames) => {
    let frames = []
    specialObjects = []
    console.log(objectsList)

    for (let i = 0; i < maxFrames; i++) {

        const asyncList = objectsList.filter((el) => el.startFrame <= i).map(async (obj) => {
            if (obj.startFrame == i) {
                let state = obj.changes.length == 0 ? obj.value : obj.changes[0];

                if (!primitivos.includes(obj.type)) {
                    const index = objImgs.findIndex((objImg) => objImg.type == obj.type);
                    if (index > -1) {
                        var img = new Image();
                        img.src = objImgs[index].img;
                        state = { ...state, img }


                    } else { //LLAMAR API DE ICONOS? PROBLEMA EN INGLES?}

                        /* await fetch('/api/getIcon?query=' + objImg.type) 
                            .then((response) => {
                                if (!response.ok) {
                                    throw new Error(`API request failed with status ${response.status}`);
                                }
                                return response.json();
                            })
                            .then((data) => {


                                var img = new Image();
                                img.onload = function () {
                                    ctx.drawImage(img, 0, 0);
                                }
                                img.src =  data;

                                return data;
                            })
                            .catch((error) => {
                                console.error(error);
                                return null;
                            }); */
                    }

                }

                state = { ...state, ...getSpecialValues(obj, objectsList, state.parent) }


                return { id: obj.id, state, type: obj.type, childs: (obj.childs && obj.childs.length > 0 ? obj.childs : undefined) }
            } else if (obj.startFrame + obj.changes.length > i + 1) {

                return { id: obj.id, state: obj.changes[i - obj.startFrame], type: obj.type }

            } else if (obj.startFrame + obj.changes.length == i + 1) {

                return { id: obj.id, state: { ...obj.value, parent: obj.lastValue.parent }, type: obj.type }
            } else {
                return { id: obj.id, deleted: true }
            }
        })

        const auxObjectStates = await Promise.all(asyncList)

        frames.push(auxObjectStates)

    }

    specialObjects.map((speObj) => {
        frames = frames.map((obj, index) => {
            if (index > speObj.startFrame && index <= speObj.endFrame) {
                return [...obj, { id: speObj.objectInfo.id, type: speObj.objectInfo.type }]

            } else if (index == speObj.startFrame) {

                const index = objImgs.findIndex((objImg) => objImg.type == speObj.objectInfo.type);
                if (index > -1) {
                    const img = new Image();
                    img.src = objImgs[index].img;

                    return [...obj, { ...speObj.objectInfo, state: { ...speObj.objectInfo.state, img } }]
                } else {
                    return [...obj, speObj.objectInfo]
                }

            } else {
                return obj
            }
        })
    })

    frames.push([...objectsList.map((obj) => { //BECAUSE IT MAY BE THAT THERE IS NOT A WAITIGN AT THE END

        if (obj.value != null) {
            const index = objImgs.findIndex((objImg) => objImg.type == obj.type);
            if (index > -1) {
                const img = new Image();
                img.src = objImgs[index].img;
                return {
                    id: obj.id, childs: (obj.childs && obj.childs.length > 0 ? obj.childs : undefined), state: {
                        ...obj.value,
                        parent: obj.lastValue.parent, img, ...getSpecialValues(obj, objectsList, obj.lastValue.parent)
                    }, type: obj.type
                }

            } else {
                return {
                    id: obj.id, childs: (obj.childs && obj.childs.length > 0 ? obj.childs : undefined), state: {
                        ...obj.value,
                        parent: obj.lastValue.parent, ...getSpecialValues(obj, objectsList, obj.lastValue.parent)
                    }, type: obj.type
                }

            }

        } else {
            return { id: obj.id, deleted: true }
        }
    }),

    ...specialObjects.map((speObj) => {
        const parentObj = objectsList.find((obj) => obj.id == speObj.objectInfo.state.parent)
        if (parentObj && parentObj.value != null) {

            const index = objImgs.findIndex((objImg) => objImg.type == speObj.type);
            if (index > -1) {
                const img = new Image();
                img.src = objImgs[index].img;
                return { ...speObj.objectInfo, state: { ...speObj.objectInfo.state, img } }

            } else {
                return speObj.objectInfo
            }

        } else {
            return { id: obj.id, deleted: true }
        }
    })])


    return frames
}


const getSpecialValues = (obj, objectsList, parentID) => {
    let vals = {}
    const speIndex = specialBehavior.findIndex((special) => special.type == obj.type);
    if (speIndex > -1) {
        if (!specialBehavior[speIndex].with || objectsList.some((lObj) => lObj.type == specialBehavior[speIndex].with)) {

            specialBehavior[speIndex].toAdd.forEach((toAdd) => {
                if (toAdd.type == 0) {
                    vals = { ...vals, ...toAdd.value }
                } else if (toAdd.type == 1) {

                    const objectState = {};
                    const state = obj.changes.length == 0 ? obj.value : obj.changes[0]

                    toAdd.value.toPass.forEach(varVal => {
                        const newKey = varVal.variable;
                        const newValue = state[varVal.value];
                        objectState[newKey] = newValue;
                    });
                    specialObjects.push(
                        {
                            startFrame: obj.startFrame, endFrame: obj.startFrame + obj.changes.length,
                            objectInfo: {
                                id: specialObjects.length, type: toAdd.value.nameType,
                                state: { ...objectState, ...toAdd.value.toPut, parent: obj.id }
                            }
                        }
                    )

                } else {
                    vals = { ...vals, ...specialEffects(toAdd.value, objectsList, parentID, obj) }
                }
            })

        }
        return vals
    } else {
        return {}
    }
}


const specialEffects = (special, objectsList, parentID, obj) => {
    switch (special.specialType) {
        case 0:
            if (parentID > -1) { //LOS PONE EN EL EJE X
                if (special.extra == 0) {
                    const childIndex = objectsList.find((parent) => parent.id == parentID).childs.findIndex((ch) => ch == obj.id)
                    return { localX: childIndex }

                } else if (special.extra == 1) {
                    const childIndex = objectsList.find((parent) => parent.id == parentID).childs.length - 1
                    return { localX: childIndex }

                } else {
                    return { localX: 0 }
                }
            }

            ; break;

        case 1:
        case 2: ; break;
        case 3: ; break;
    }
}




export default Interpreter