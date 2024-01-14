import React from "react";

const primitivos = ['Cuadrado', 'Circulo', 'Texto']
const objImgs = [
    { type: 'Gato', img: '/objects/gato.png' },
    { type: 'Auto', img: '/objects/autoRojo.png' },
    { type: 'Bus', img: '/objects/bus.png' },
    { type: 'Pasajero', img: '/objects/pasajero.png' },
    { type: 'Conductor', img: '/objects/conductor.png' },
]

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

                state = {...state, ...getSpecialValues(obj, objectsList)}


                return { id: obj.id, state, type: obj.type }
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
    frames.push(objectsList.map((obj)=>{ //BECAUSE IT MAY BE THAT THERE IS NOT A WAITIGN AT THE END
        if(obj.value != null){
            const index = objImgs.findIndex((objImg) => objImg.type == obj.type);
            if (index > -1) {
                const img = new Image();
                img.src = objImgs[index].img;
                return { id: obj.id, state : {...obj.value, parent : obj.lastValue.parent, img}, type: obj.type } 

            }else{
                return { id: obj.id, state : {...obj.value, parent : obj.lastValue.parent}, type: obj.type } 

            }

        }else{
            return { id: obj.id, deleted: true } 
        }
    }))
    return frames
}

export default Interpreter
