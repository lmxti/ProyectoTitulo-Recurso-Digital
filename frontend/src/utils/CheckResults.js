import React from "react";

const CheckResults = (resInfo, lesInfo) => {
    const badFunctions = []
    let index = -1;
    console.log("Chekingres ", lesInfo, resInfo); 
    if(lesInfo.functionToCheck){
        for(let i = 0; i < lesInfo.functionToCheck.length; i++){
            if((index = resInfo.functionsResult.findIndex((func)=> func.name == lesInfo.functionToCheck[i].name)) == -1 
            || resInfo.functionsResult[index].result != lesInfo.functionToCheck[i].result){
                badFunctions.push(lesInfo.functionToCheck[i].name);
            } 
        }
    }

    
    /* 
    function compareObjs(obj1, obj2) {
        // Get the keys (properties) of both objects
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
    
        // Check if the number of keys is the same
        if (keys1.length !== keys2.length) {
            return false;
        }
    
        // Check if the keys are the same
        for (const key of keys1) {
            if (!keys2.includes(key)) {
                return false;
            }
    
            // Check if the values for the same key are equal
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
    
        // If all checks passed, the objects have the same properties and values
        return true;
    } */

    function checkProperty(obj, prop) {
        if(!Object.keys(obj).includes(prop.name) || (prop.value && obj[prop.name].toString() != prop.value)){
            return false
        }
    
        // If all checks passed, the objects have the same properties and values
        return true;
    }


    const badObjects = []
    let objs = []

    if(lesInfo.objectsToCheck){
        for(let i = 0; i < lesInfo.objectsToCheck.length; i++){ 
            if((objs = resInfo.objectsResult.filter((obj)=> obj.type == lesInfo.objectsToCheck[i].type)).length > 0){
                for(let p = 0; p < lesInfo.objectsToCheck[i].properties.length; p++){
                    if(!objs.some(()=> objs.changes.some((obj)=> checkProperty(obj, lesInfo.objectsToCheck[i].properties[p])))){
                        badFunctions.push({name: lesInfo.objectsToCheck[i].name, variable : lesInfo.objectsToCheck[i].properties[p].name}); 
                    }
                }
            } 
        }
    }


    if(badObjects.length == 0 && badFunctions.length == 0){
        return undefined
    }else{
        return { badObjects, badFunctions }
    }



}

export default CheckResults