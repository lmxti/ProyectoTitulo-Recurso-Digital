// <--------------------------------HOOKS REACT----------------------------------------->
import { useEffect, useState, useRef } from "react";
// <----------------------------FUNCIONES IMPORTADAS------------------------------------>
import { useRouter } from 'next/router';
// <----------------------------COMPONENTES Y MODULOS----------------------------------->
import CodingSection from "@/components/CodingSection";
import leccionInfo from "../../../public/lessons/leccion1";
import Interpreter from "@/utils/Interpreter";


const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))


/**
 * @name LeccionPage
 * @description Contenido de la leccion seleccionada
 */
const LeccionPage = () => {
    // <--------------------------------CONSTANTES----------------------------------------->
    // Enrutamiento de Next.js
    const router = useRouter();
    
    // Seteo de informacion de la leccion actual
    const [lessonInfo, setLessonInfo] = useState(undefined)
    //  Seteo de resultado 
    const [resultado, setResultado] = useState("");

    // Referencia al lienzo (canvas)
    const canvasRef = useRef();
    // Seteo de tamaño de lienzo (canvas)
    const [canvasSize, setCanvasSize] = useState({ width: 1680, height: 720 })
    // Seteo de frames (almacena los fotogramas de la animacion)
    const [frames, setFrames] = useState();
    // Seteo de frame actual de la animacion
    const [currentFrame, setCurrentFrame] = useState(undefined)
    

    // <--------------------------------FUNCIONES----------------------------------------->

    /**
     * @name handleResultado
     * @description Funcion que segun el tipo de resultado de la leccion, muestra el resultado en la consola o en el lienzo (canvas)
     * @param {Object} nuevoResultado - Resultado de la leccion
     */
    const handleResultado = async (nuevoResultado) => {
        // Leccion es de tipo 'consola'
        if (lessonInfo.isConsole) {
            console.log("[LeccionID] -> HandleResultado ->", nuevoResultado)
            setResultado(nuevoResultado.resCode);
            console.log("->Resultado de la funcion", resultado);
        
          // Leccion es de tipo 'animacion'
        } else {
            // Verificacion si el resultado es un string
            if (nuevoResultado.resCode && typeof nuevoResultado.resCode === "string") {
                const resOutput = nuevoResultado.resCode
                // Regular expression to match the JSON at the end
                /*  const reg = new RegExp('\{(?:[^{}]|(R?))*\}') */

                /**
                 * @name matchRecursive
                 * @description Recorre una cadena `text` caracter por caracter y utiliza la pila `stack` para
                 * llevar un seguimiento desde el caracter de apertura `{` hasta el de cierre `}`. Cuando se encuentra un caracter, lo registra
                 * como coincidencia
                 * @param {String} text - Texto a analizar y buscar coincidencias
                 * @param {String} left - Caracter de apertura '{'
                 * @param {String} right - Caracter de cierre '}'
                 */
                function matchRecursive(text, left, right) {
                    // Arreglo que almacena las coincidencias
                    const matches = [];
                    // Arreglo utilizado como pila para llevar un seguimiento de los caracteres de apertura y cierre
                    const stack = [];
                    // Indice del caracter de apertura
                    let startIndex = -1;

                    for (let i = 0; i < text.length; i++) {
                        // Si el caracter es de apertura `{`
                        if (text[i] === left) {
                            // Si la pila esta vacia, se registra el indice del caracter de apertura
                            if (stack.length === 0) {
                                // Inicio de una nueva coincidencia
                                startIndex = i;
                            }
                            // Se agrega el caracter a la pila
                            stack.push(left);

                            // Si el caracter es de cierre `}` y la pila no esta vacia
                        } else if (text[i] === right && stack.length > 0) {
                                // Se elimina el caracter `{` lo que indica que se ha cerrado una coincidencia
                                stack.pop();
                                // Verificacion si la pila esta vacia
                                if (stack.length === 0) {
                                    // Si
                                    if (startIndex !== -1) {
                                        // Se extrae el contenido entre llaves y se almacena en la variable match
                                        const match = text.substring(startIndex, i + 1);
                                        // Se agrega la coincidencia al arreglo de coincidencias
                                        matches.push(match);
                                        // Se reinicia el indice del caracter de apertura
                                        startIndex = -1;
                                    }
                                }
                        }
                    }
                    // Se retorna el arreglo de coincidencias
                    return matches;
                }
                // Inicializacion de variable y asignacion de funcion que extrae coincidencias entre llaves en `resOutput`
                const matches = matchRecursive(resOutput, '{', '}');

                // Verificacion si matches no es nulo (null) y si contiene al menos una coincidencia
                if (matches && matches[0]) {
                    try {
                        // Descomposicion de datos esperados 'data' y 'maxFrames'del primer elemento 'matches' (matches[0])
                        const { data, maxFrames } = JSON.parse(matches[0]);
                        console.log(data, maxFrames)


                        // NOTA: COMENTAR FUNCIONAMIENTO DE INTERPRETER
                        await Interpreter(data, maxFrames).then((frames) => setFrames(frames))
                        // Finaliza ya que la funcion 'Interpreter' tuvo exito.
                        return; 

                    } catch (error) {
                        // Error al convertir en JSON
                        console.log("Fallo al convertir en JSON", error)
                    }
                } else {
                    // No se encontro JSON dentro de los bloques entre llaves
                    console.log("No JSON encontrado ");
                }
            }
            // Estable el estado de frames como vacio en caso de no encontrar JSON
            setCurrentFrame([])
        }
    };
    /**
     * @name updateCanvas
     * @description Funcion que actualiza/dibuja en el lienzo (canvas) los objetos proporcionados
     * @param {Object} objects - Arreglo de objetos que contiene los objetos a dibujar en el lienzo (canvas)
     */

    const updateCanvas = (objects) => {
        // Obtencion del contexto 2D del lienzo (canvas)
        const context = canvasRef.current.getContext('2d')
        // Limpieza de contenido previo en  lienzo (canvas)
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

        /* Iteracion de cada objeto en el arreglo de 'objects', por cada objeto se realizan
         operaciones de dibujo basadas en su tipo, como "Cuadradado" o "Texto" y sus propiedades*/
        objects.forEach((element) => {
            // Verificacion si el objeto es nulo o si esta marcado como eliminado
            if (!element || element.deleted) { return }

            // Variable auxiliar del objeto actual para evitar modificar el objeto original y facilitar acceso a propiedades
            let auxElement = { ...element, state: { ...element.state } }

            // Verificacion si el objeto no tiene posicion en el eje X
            if (auxElement.state.x === undefined) {
                // Verificacion si el objeto tiene padre
                if (auxElement.state.parent != -1) {
                    // Busqueda del objeto padre en el arreglo de objetos que tenga el mismo id que el padre del objeto actual
                    // Esto establece la posicion en el eje "x" del objeto en funcion a su padre
                    auxElement.state.x = objects.find((ob) => ob.id == auxElement.state.parent).state.x
                } else {
                    // Si el objeto no tiene padre, se establece su posicion en el eje x en la mitad del lienzo (canvas)
                    auxElement.state.x = canvasSize.width * 0.5;
                }
            }

            // Verificacion si el objeto no tiene posicion en el eje Y
            if (auxElement.state.y === undefined) {
                // Verificacion si el objeto tiene padre
                if (auxElement.state.parent != -1) {
                    // Busqueda del objeto padre en el arreglo de objetos que tenga el mismo id que el padre del objeto actual
                    // Esto establece la posicion en el eje "y" del objeto en funcion a su padre
                    auxElement.state.y = objects.find((ob) => ob.id == auxElement.state.parent).state.y
                } else {
                    // Si el objeto no tiene padre, se establece su posicion en el eje y en la mitad del lienzo (canvas)
                    auxElement.state.y = canvasSize.height * 0.5;
                }
            }

            // Si el objeto es de tipo "Cuadrado"
            if (auxElement.type == 'Cuadrado') {
                // Guarda el estado actual del contexto, permite realizar transformaciones/configuraciones sin afectar otros objetos dibujados
                context.save()

                // Se establece el "punto de origen" del contexto a la posicion `auxElement.state.x` y `auxElement.state.y`
                context.translate(auxElement.state.x, auxElement.state.y)
                // Se rota el contexto en funcion a la rotacion del objeto
                context.rotate(auxElement.state.rotacion * Math.PI / 180);
                
                // Se establece el tamaño del objeto en funciona los valores de ancho y alto proporcionados
                const size = { ancho: (auxElement.state.ancho ? auxElement.state.ancho : 100), alto: (auxElement.state.alto ? auxElement.state.alto : 100) }


                // Se establece el color de relleno
                context.fillStyle = (!auxElement.state.color || auxElement.state.color == null ? '#ffffff00' : auxElement.state.color);
                // Establece el color del borde del objeto
                context.strokeStyle = '#000000'
                // Se establece el grosor del borde del objeto
                context.lineWidth = 5

                // Se dibuja el objeto en el lienzo (canvas)
                context.strokeRect(-size.ancho * 0.5, -size.alto * 0.5, size.ancho, size.alto)
                // Se rellena el objeto en el lienzo (canvas)
                context.fillRect(-size.ancho * 0.5, -size.alto * 0.5, size.ancho, size.alto)

                // Se restaura el estado del contexto de dibujo, para evitar transformaciones y configuraciones afecten a otros objetos dibujados posteriormente
                context.restore()
            } 
            // Si el objeto es de tipo "Texto"
            else if (auxElement.type == 'Texto') {
                // Guarda el estado actual del contexto, permite realizar transformaciones/configuraciones sin afectar otros objetos dibujados
                context.save()

                // Se establece el "punto de origen" del contexto a la posicion `auxElement.state.x` y `auxElement.state.y`
                context.translate(auxElement.state.x, auxElement.state.y)
                // Se rota el contexto en funcion a la rotacion del objeto
                context.rotate(auxElement.state.rotacion * Math.PI / 180);

                // Se establece el tamaño del texto en funcion al tamaño proporcionado
                const fontSize = auxElement.state.tamano ? auxElement.state.tamano : 20

                // Se establece el tamaño de fuente
                context.font = `${fontSize}px Arial`;
                // Se establece el color de fuente
                context.fillStyle = (!auxElement.state.color || auxElement.state.color == null ? '#ffffff00' : auxElement.state.color);
                // Establece el color del borde del objeto
                context.strokeStyle = '#000000'
                // Establece la alineación del texto en el centro horizontalmente
                context.textAlign = "center"
                // Establece la alineación del texto en la parte superior del texto
                context.textBaseline = "hanging";
                // Establece el grosor del borde del texto
                context.lineWidth = 3
                context.strokeText(auxElement.state.texto, 0, -fontSize * 0.5);
                // Establece un grosor mayor para el relleno del texto
                context.lineWidth = 12
                // Dibuja el texto con relleno utilizando 'fillText' en la misma posición
                context.fillText(auxElement.state.texto, 0, -fontSize * 0.5);

                // Se restaura el estado del contexto de dibujo, para evitar transformaciones y configuraciones afecten a otros objetos dibujados posteriormente
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
            setLessonInfo(require(`../../../public/lessons/leccion${LeccionID}`).default)
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
