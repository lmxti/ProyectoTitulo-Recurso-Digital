import { useEffect, useState, useRef } from "react";
import { useRouter } from 'next/router';
import CodingSection from "@/components/CodingSection";
import Interpreter from "@/utils/Interpreter";
import leccionInfo from "../../../public/leccion1";


const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const LeccionPage = () => {
    const router = useRouter();
    const canvasRef = useRef()
    const [canvasSize, setCanvasSize] = useState({ width: 1680, height: 720 })
    const [resultado, setResultado] = useState("");
    const [frames, setFrames] = useState()
    const [currentFrame, setCurrentFrame] = useState(undefined)
    const [lessonInfo, setLessonInfo] = useState(undefined)



    // Función para actualizar el resultado
    const handleResultado = async (nuevoResultado) => {
        if (lessonInfo.isConsole) {
            console.log("RES:", nuevoResultado)
            setResultado(nuevoResultado.resCode);
            //the result of the functions is nuevoResultado.resFunctions 
            
        } else {
            if (nuevoResultado.resCode && typeof nuevoResultado.resCode === "string") {
                const resOutput = nuevoResultado.resCode
                // Regular expression to match the JSON at the end
                /*  const reg = new RegExp('\{(?:[^{}]|(R?))*\}') */

                function matchRecursive(text, left, right) {
                    const matches = [];
                    const stack = [];
                    let startIndex = -1;

                    for (let i = 0; i < text.length; i++) {
                        if (text[i] === left) {
                            if (stack.length === 0) {
                                startIndex = i; // Start of a new match
                            }
                            stack.push(left);
                        } else if (text[i] === right && stack.length > 0) {
                            stack.pop();
                            if (stack.length === 0) {
                                if (startIndex !== -1) {
                                    const match = text.substring(startIndex, i + 1);
                                    matches.push(match);
                                    startIndex = -1;
                                }
                            }
                        }
                    }

                    return matches;
                }

                const matches = matchRecursive(resOutput, '{', '}');

                if (matches && matches[0]) {
                    try {
                        const { data, maxFrames } = JSON.parse(matches[0]);
                        console.log(data, maxFrames)
                        await Interpreter(data, maxFrames).then((frames) => setFrames(frames))

                        return; //RETURN ON SUCCES

                    } catch (error) {
                        console.log("Fallo al convertir en JSON", error)
                    }
                } else {
                    console.log("No JSON encontrado ");
                }

            }

            setCurrentFrame([])
        }
    };

    const updateCanvas = (objects) => {
        const context = canvasRef.current.getContext('2d')
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

        objects.forEach((element) => {
            if (!element || element.deleted) { return }

            let auxElement = { ...element, state: { ...element.state } }

            if (auxElement.state.x === undefined) {
                if (auxElement.state.parent != -1) {
                    auxElement.state.x = objects.find((ob) => ob.id == auxElement.state.parent).state.x
                } else {
                    auxElement.state.x = canvasSize.width * 0.5;
                }
            }

            if (auxElement.state.y === undefined) {
                if (auxElement.state.parent != -1) {
                    auxElement.state.y = objects.find((ob) => ob.id == auxElement.state.parent).state.y
                } else {
                    auxElement.state.y = canvasSize.height * 0.5;
                }
            }

            if (auxElement.type == 'Cuadrado') {
                context.save()

                context.translate(auxElement.state.x, auxElement.state.y)
                context.rotate(auxElement.state.rotacion * Math.PI / 180);
                const size = { ancho: (auxElement.state.ancho ? auxElement.state.ancho : 100), alto: (auxElement.state.alto ? auxElement.state.alto : 100) }

                context.fillStyle = (!auxElement.state.color || auxElement.state.color == null ? '#ffffff00' : auxElement.state.color);
                context.strokeStyle = '#000000'
                context.lineWidth = 5


                context.strokeRect(-size.ancho * 0.5, -size.alto * 0.5, size.ancho, size.alto)
                context.fillRect(-size.ancho * 0.5, -size.alto * 0.5, size.ancho, size.alto)

                context.restore()

            } else if (auxElement.type == 'Texto') {


                context.save()

                context.translate(auxElement.state.x, auxElement.state.y)
                context.rotate(auxElement.state.rotacion * Math.PI / 180);

                const fontSize = auxElement.state.tamano ? auxElement.state.tamano : 20

                context.font = `${fontSize}px Arial`;
                context.fillStyle = (!auxElement.state.color || auxElement.state.color == null ? '#ffffff00' : auxElement.state.color);
                context.strokeStyle = '#000000'
                context.textAlign = "center"
                context.textBaseline = "hanging";

                context.lineWidth = 3
                context.strokeText(auxElement.state.texto, 0, -fontSize * 0.5);

                context.lineWidth = 12
                context.fillText(auxElement.state.texto, 0, -fontSize * 0.5);

                context.restore()
            }
        })
    }


    const transitionObjects = (prevObjs, changes, perc) => {

        return prevObjs.map((obj, index) => {

            if (!changes[index]) {
                return obj
            } else if (changes[index].deleted) {
                return changes[index]
            }

            let auxChanges = { ...changes[index] }
            if (auxChanges.x) {
                auxChanges.x = obj.state.x + (auxChanges.x - obj.state.x) * perc
            }

            if (auxChanges.y) {
                auxChanges.y = obj.state.y + (auxChanges.y - obj.state.y) * perc
            }

            if (auxChanges.tamano) {
                auxChanges.tamano = obj.state.tamano + (auxChanges.tamano - obj.state.tamano) * perc
            }

            if (auxChanges.ancho) {
                auxChanges.ancho = obj.state.ancho + (auxChanges.ancho - obj.state.ancho) * perc
            }

            if (auxChanges.alto) {
                auxChanges.alto = obj.state.alto + (auxChanges.alto - obj.state.alto) * perc
            }



            return { ...obj, state: { ...obj.state, ...auxChanges } }
        })
    }

    const renderAnimation = async () => {
        console.log(frames)
        let onScreen = frames[0]
        updateCanvas(frames[0])

        setCurrentFrame(undefined)

        await sleep(500)

        for (let i = 1; i < frames.length; i++) {
            const prevFrame = [...onScreen];
            const changes = []

            onScreen = onScreen.map((frame, index) => {
                if (frame.deleted) {
                    changes.push(undefined)
                    return frame
                }

                const frameChange = frames[i].find((f) => f.id == frame.id)

                if (frameChange.deleted) {
                    changes.push(frameChange)
                    return frameChange

                } else if (!frameChange.state) {
                    changes.push(undefined)
                    return frame

                } else {
                    changes.push(frameChange.state)
                    return { ...frame, state: { ...frame.state, ...frameChange.state } }
                }
            })

            if (onScreen.length < frames.length) {
                onScreen.push(...frames[i].filter((f) => !onScreen.some((obj) => obj.id == f.id)))
            }

            for (let f = 0; f < 25; f++) {
                updateCanvas(transitionObjects(prevFrame, changes, f / 24))
                await sleep(500 / 24) //cada 42 milisegunds = 24 frames por segundo 
            }

            await sleep(100)
        }


        setCurrentFrame(frames[frames.length - 1])
    }

    useEffect(() => {
        const { LeccionID } = router.query;
        if (LeccionID) {
            setLessonInfo(require(`../../../public/leccion${LeccionID}`).default)

        }
    }, [router.query]);

    useEffect(() => {
        if (!leccionInfo.isConsole && canvasRef.current) {
            const resizeCanvas = async () => {
                const container = canvasRef.current.parentElement;
                setCanvasSize({ width: container.clientWidth * 0.99 * 2, height: window.innerHeight * 0.46 * 2 });
            }

            resizeCanvas();

            window.addEventListener('resize', resizeCanvas); //BUGGED CANVAS ON SCREEN RESIZE FIXED WHEN RETURN TO FIRST SIZE, MAYBE MODIFY STARTCENTER ON CANVAS RESIZE
            return () => {
                window.removeEventListener('resize', resizeCanvas);
            };

        }

    }, [lessonInfo]);

    useEffect(() => {
        if (!leccionInfo.isConsole && currentFrame) {
            updateCanvas(currentFrame)
        }
    }, [canvasSize])


    useEffect(() => {
        if (!leccionInfo.isConsole && canvasRef.current && frames) {
            const context = canvasRef.current.getContext('2d')
            context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

            if (frames.length > 0) {
                renderAnimation()
            }
        }

    }, [frames])


    return (
        <>
            {(lessonInfo &&
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 m-2 h-[calc(100vh)]">
                    {/* Exercise Section */}
                    <section className="bg-white overflow-y-scroll h-full rounded-[10px] row-span-2">
                        <h2 className="bg-eastBay   p-2 text-2xl font-thin">
                            Enunciado
                        </h2>

                        {lessonInfo.enunciado}

                        <h2 className="bg-eastBay w-full p-2 text-2xl font-thin">
                            Instrucciones
                        </h2>

                        {lessonInfo.instrucciones}

                    </section>


                    {/* Coding Section */}
                    <CodingSection onResult={handleResultado} lessonInfo={lessonInfo} />
                    {/* AÑADIR BOTON PARA HACERLO MAS GRANDE Y QUE OCUPE TODA LA PANTALLA A EXCEPCION DE UN 
        PEQUEÑO CUADRADO EN DONDE SE MUESTRA O LA CONSOLA O LA ANIMACION */}

                    {lessonInfo.isConsole &&

                        <section className="bg-foreground rounded-[10px]">

                            <h2 className=" rounded-t-[10px] p-2 text-2xl font-thin">
                                consola
                            </h2>
                            <div className="p-2">
                                <div className="bg-background h-[38vh] overflow-y-scroll  rounded-[10px] text-white p-5">
                                    {resultado.split(/\r?\n/).map((res, index) => {
                                        return (<div key={index}><code >{res}</code><br /></div>)

                                    })}
                                </div>
                            </div>
                        </section>

                        ||

                        <section className="p-2 bg-foreground rounded-[10px]">
                            <canvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height} className="bg-white border-[3px] border-background h-[46vh] rounded-[10px]" />
                        </section>

                    }

                </div>)

                ||
                <div>
                    LOADING...

                </div>
            }
        </>
    );
};

export default LeccionPage;
