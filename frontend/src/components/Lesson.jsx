// <--------------------------------HOOKS REACT----------------------------------------->
import { useEffect, useState, useRef } from "react";
// <----------------------------COMPONENTES Y MODULOS----------------------------------->
// Editor de codigo
import CodingSection from "@/components/CodingSection";

// Interprete de codigo
import Interpreter from "@/utils/Interpreter";
import CheckResults from "@/utils/CheckResults";


import {HiOutlineDocumentText} from 'react-icons/hi'
import {FaAlignJustify} from 'react-icons/fa'
import {MdQuestionAnswer} from 'react-icons/md'



const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

/**
 * @name LeccionPage
 * @description Contenido de la leccion seleccionada
 */
const Lesson = ({leccionInfo, setResult}) => {
    // <--------------------------------CONSTANTES----------------------------------------->
    // Enrutamiento de Next.js


    //  Seteo de resultado 
    const [resultado, setResultado] = useState("");

    // Referencia al lienzo (canvas)
    const canvasRef = useRef();
    //
    const theoryScrollRef = useRef();

    // Seteo de tamaño de lienzo (canvas)
    const [canvasSize, setCanvasSize] = useState({ width: 1680, height: 720 })
    // Seteo de frames (almacena los fotogramas de la animacion)
    const [frames, setFrames] = useState();
    // Seteo de frame actual de la animacion
    const [currentFrame, setCurrentFrame] = useState(undefined)
    

    const extractResJson = async (nuevoResultado)=>{
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
                    if(leccionInfo.checkResult){ 
                        const problems = CheckResults({objectsResult : data, functionsResult : nuevoResultado.resFunctions}, leccionInfo) 
                        
                        setResult({id : leccionInfo.id,  problems }) 
                    }else{
                        setResult({id : leccionInfo.id})
                    }
                    
                    if(!leccionInfo.isConsole){
                        
                        // NOTA: COMENTAR FUNCIONAMIENTO DE INTERPRETER
                        await Interpreter(data, maxFrames).then((frames) => { setFrames(frames)})
                        // Finaliza ya que la funcion 'Interpreter' tuvo exito.
                        
                    }

                    console.log(nuevoResultado.resCode, matches[0])

                    return nuevoResultado.resCode.replace(matches[0], "")

                } catch (error) {
                    // Error al convertir en JSON
                    console.log("Fallo al convertir en JSON", error)
                }
            } else {
                if(leccionInfo.checkResult){ 
                    const problems = CheckResults({objectsResult : [], functionsResult : nuevoResultado.resFunctions}, leccionInfo) 
                    setResult({id : leccionInfo.id,  problems }) 
                }else{
                    setResult({id : leccionInfo.id})
                }
                // No se encontro JSON dentro de los bloques entre llaves
                console.log("No JSON encontrado ");
            }
            // Estable el estado de frames como vacio en caso de no encontrar JSON
            setCurrentFrame([])
            return nuevoResultado.resCode
        }

        // Estable el estado de frames como vacio en caso de no encontrar JSON
        setCurrentFrame([])
        return ""
        
    }
    // <--------------------------------FUNCIONES----------------------------------------->

    /**
     * @name handleResultado
     * @description Funcion que segun el tipo de resultado de la leccion, muestra el resultado en la consola o en el lienzo (canvas)
     * @param {Object} nuevoResultado - Resultado de la leccion
     */
    
    const handleResultado = async (nuevoResultado) => {
        console.log(nuevoResultado)
        if(nuevoResultado.error){
            setFrames([])
            setCurrentFrame([])
            setResultado(nuevoResultado.error);
        }else if (leccionInfo.isConsole) { // Leccion es de tipo 'consola'
            
           /*  console.log("[LeccionID] -> HandleResultado ->", nuevoResultado) */
            extractResJson(nuevoResultado).then((res)=>setResultado(res));
            
           /*  console.log("->Resultado de la funcion", extractResJson(nuevoResultado)); //NO LLAMAR DOS VECES BOBO*/
        
          // Leccion es de tipo 'animacion'
        } else {
            extractResJson(nuevoResultado)
            
        }
    };

    /**
     * @name updateCanvas
     * @description Funcion que actualiza/dibuja en el lienzo (canvas) los objetos proporcionados
     * @param {Object} objects - Arreglo de objetos que contiene los objetos a dibujar en el lienzo (canvas)
     */
    const updateCanvas = (objects) => {

        if(!canvasRef.current){
            return
        }
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
                    const parent = objects.find((ob) => ob.id == auxElement.state.parent)

                    if(auxElement.state.localX != undefined && parent.state.ratio){
                        const sizeX = canvasSize.height * (parent.state.ratio ? parent.state.ratio : 0.7)
                        const xLeft =  (parent.state.x != undefined ? parent.state.x : canvasSize.width * 0.5) - (sizeX * 0.5)

                        auxElement.state.x = xLeft + (sizeX / (parent.childs ? parent.childs.length + 1 : 2)) * (auxElement.state.localX + 1) 
                        
                    }else{
                        auxElement.state.x = (parent.state.x != undefined ? parent.state.x : canvasSize.width * 0.5)
                    }

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
                    const parent = objects.find((ob) => ob.id == auxElement.state.parent)

                    if(auxElement.state.localY != undefined){
                        const sizeY = canvasSize.height * (parent.state.ratio ? parent.state.ratio : 0.7)
                        const yTop =  (parent.state.y != undefined ? parent.state.y : canvasSize.height * 0.5) - (sizeY * 0.5)

                        auxElement.state.y = yTop + (sizeY / (parent.childs ? parent.childs.length + 1 : 2)) * (auxElement.state.localY + 1) 
                    }else{
                        auxElement.state.y = (parent.state.y != undefined ? parent.state.y : canvasSize.height * 0.5)
                    }



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

            }else if(auxElement.state.img ){
                
                if(auxElement.state.img.complete){
                    context.save()
                    const aspRatio = auxElement.state.img.naturalHeight / auxElement.state.img.naturalWidth
                    const originalWidth = canvasSize.height * (auxElement.state.ratio ? auxElement.state.ratio : 0.7);
                    const originalHeight = aspRatio * originalWidth;


                    // Se establece el "punto de origen" del contexto a la posicion `auxElement.state.x` y `auxElement.state.y`
                    context.translate(auxElement.state.x, auxElement.state.y)
                    // Draw the image on the canvas
                    context.drawImage(auxElement.state.img, -originalWidth * 0.5, -originalHeight * 0.5, originalWidth, originalHeight);
                    // Se restaura el estado del contexto de dibujo, para evitar transformaciones y configuraciones afecten a otros objetos dibujados posteriormente
                    context.restore()
                }else{
                    auxElement.state.img.onload = ()=>{
                        // Guarda el estado actual del contexto, permite realizar transformaciones/configuraciones sin afectar otros objetos dibujados
                        context.save()
                        const aspRatio = auxElement.state.img.naturalHeight / auxElement.state.img.naturalWidth
                        const originalWidth = canvasSize.height * (auxElement.state.ratio ? auxElement.state.ratio : 0.7);
                        const originalHeight = aspRatio * originalWidth;
    
    
                        // Se establece el "punto de origen" del contexto a la posicion `auxElement.state.x` y `auxElement.state.y`
                        context.translate(auxElement.state.x, auxElement.state.y)
                        // Draw the image on the canvas
                        context.drawImage(auxElement.state.img, -originalWidth * 0.5, -originalHeight * 0.5, originalWidth, originalHeight);
                        // Se restaura el estado del contexto de dibujo, para evitar transformaciones y configuraciones afecten a otros objetos dibujados posteriormente
                        context.restore()
                    }

                }
                
            }
        })
    }


    /**
     * @name transitionObjects
     * @description Funcion que realiza la transicion/cambios entre objetos
     * @param {Objects} prevObjs - Objetos previos
     * @param {Objects} changes - Objetos con cambios {x, y, tamano, ancho, alto
     * @param {Number} perc - Porcentaje de transicion
     * @returns 
     */
    const transitionObjects = (prevObjs, changes, perc) => {
        // Mapeo de `prevObjs` (objetos previos)
        return prevObjs.map((obj, index) => {

            // Verificacion si el objeto no tiene cambios
            if (!changes[index]) {
                // Retorna el objeto
                return obj
            } 
            // Verificacion si el objeto fue eliminado
            else if (changes[index].deleted) {
                // Retorna el objeto con el estado de eliminado
                return changes[index]
            }

            // Variable auxiliar que almacena los cambios del objeto actual
            let auxChanges = { ...changes[index] }

            // Verificacion de cambios en posicion en el eje X
            if (auxChanges.x) {
                auxChanges.x = obj.state.x + (auxChanges.x - obj.state.x) * perc
            }

            // Verificacion de cambios en posicion en el eje Y
            if (auxChanges.y) {
                auxChanges.y = obj.state.y + (auxChanges.y - obj.state.y) * perc
            }

            // Verificacion de cambios tamaño
            if (auxChanges.tamano) {
                auxChanges.tamano = obj.state.tamano + (auxChanges.tamano - obj.state.tamano) * perc
            }

            // Verificacion de cambios en ancho
            if (auxChanges.ancho) {
                auxChanges.ancho = obj.state.ancho + (auxChanges.ancho - obj.state.ancho) * perc
            }

            // Verificacion de cambios en alto
            if (auxChanges.alto) {
                auxChanges.alto = obj.state.alto + (auxChanges.alto - obj.state.alto) * perc
            }

            // Retorno de la copia del objecto original con las propiedades  modificadas
            return { ...obj, state: { ...obj.state, ...auxChanges } }
        })
    }

    /**
     * @name renderAnimation
     * @description Funcion que renderiza la animacion
     */
    const renderAnimation = async () => {

        console.log(frames)
        // Establece el primer frame en la variable `onScreen`
        let onScreen = frames[0]

        // Actualiza el lienzo (canvas) con el primer frame
        updateCanvas(frames[0])

        // Establece el frame actual como indefinido
        setCurrentFrame(undefined)

        // Espera 500 milisegundos
        await sleep(500)

        for (let i = 1; i < frames.length; i++) {
            // Copia del frame actual
            const prevFrame = [...onScreen];
            // Inicializacion de arreglo para rastrear cambios
            const changes = []

            // Mapeo de cada frame en el arreglo de frames
            onScreen = onScreen.map((frame, index) => {
                // Verificacion si el objeto fue eliminado
                if (frame.deleted) {
                    // Se agrega el objeto "undefined" al arreglo de cambios a la matriz de cambios para indicar que no hay cambios
                    changes.push(undefined)
                    // El objeto se devuelve sin cambios
                    return frame
                }

                // Busqueda de cambio de frame del objeto actual para el siguiente frame
                const frameChange = frames[i].find((f) => f.id == frame.id)

                // Verificacion si el objeto fue eliminado
                if (frameChange.deleted) {
                    // Se agrega el objeto "undefined" al arreglo de cambios a la matriz de cambios para indicar que no hay cambios
                    changes.push(frameChange)
                    // Retorna el objeto con cambios, es decir eliminado
                    return frameChange

                }
                // Verificacion de cambio de estado del objeto actual
                else if (!frameChange.state) {
                    // Se agrega el objeto "undefined" al arreglo de cambios a la matriz de cambios para indicar que no hay cambios
                    changes.push(undefined)
                    // Retorna el objeto sin cambios
                    return frame

                } else {
                    changes.push(frameChange.state)
                    return { ...frame, state: { ...frame.state, ...frameChange.state } }
                }
            })

            // Verificacion de que todos los objetos esten en 'onScreen'
            if (onScreen.length < frames.length) {
                // Se agregan los objetos que no estan en 'onScreen' al final del arreglo
                onScreen.push(...frames[i].filter((f) => !onScreen.some((obj) => obj.id == f.id)))
            }
            // Animacion de transicion entre frames
            for (let f = 0; f < 25; f++) {
                // Actualiza el lienzo (canvas) con los objetos que representan una transicion
                updateCanvas(transitionObjects(prevFrame, changes, f / 24))
                // Espera 42 milisegundos (24 frames por segundo)
                await sleep(500 / 24) //cada 42 milisegunds = 24 frames por segundo 
            }
            await sleep(100)
        }

        // Seteo del ultimo frame y marco actual de la animacion/transicion para mantener el ultimo frame visible
        setCurrentFrame(frames[frames.length - 1])
    }

    const [flipInstructions, setFlipInstructions] = useState(true)
     // Add an event listener for the scroll event
    useEffect(() => {
        const scrollContainer = theoryScrollRef.current;
        if (!scrollContainer) return;

        const handleScroll = () => {
            if(flipInstructions){
                const isBottom = scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight;
                if(isBottom){
                    setExpand(isBottom);
                    setFlipInstructions(false)
                }
            }
        };

        scrollContainer.addEventListener('scroll', handleScroll);

        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, [flipInstructions]);


    // Actualiza el tamaño del lienzo (canvas) cada vez que cambia la leccion
    useEffect(() => {
        // Verificacion si la leccion no es de tipo 'consola' y si el lienzo (canvas) existe
        if (!leccionInfo.isConsole && canvasRef.current) {  
            // Obtencion del contexto 2D del lienzo (canvas)
            const context = canvasRef.current.getContext('2d')
            // Limpieza de contenido previo en  lienzo (canvas)
            context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

            /**
             * @name resizeCanvas
             * @description Funcion que actualiza el tamaño del lienzo (canvas) en funcion al tamaño de la ventana
             */
            const resizeCanvas = async () => {
                const container = canvasRef.current.parentElement;
                setCanvasSize({ width: container.clientWidth * 0.99 * 2, height: window.innerHeight * 0.42 * 2 });
            }
            // Ejecuta la funcion `resizeCanvas` al cargar la pagina
            resizeCanvas();

            // NOTA: FALTA REVISION POR BUG DE CANVAS AL CAMBIAR TAMAÑO DE VENTANA
            window.addEventListener('resize', resizeCanvas); //BUGGED CANVAS ON SCREEN RESIZE FIXED WHEN RETURN TO FIRST SIZE, MAYBE MODIFY STARTCENTER ON CANVAS RESIZE
            return () => {
                // Eliminacion de evento de escucha 'resize' para evitar problemas de memoria
                window.removeEventListener('resize', resizeCanvas);
            };
        }

        theoryScrollRef.current.scrollTo({
            top: 0,
            behavior: 'smooth', // Use smooth scrolling if supported
          });
        setFlipInstructions(true)
        setExpand(false)
        setResultado("")
        setFrames([])
        setCurrentFrame(undefined)

    }, [leccionInfo]);


    

    // Actualiza el lienzo (canvas) con el contenido del 'currentFrame' o frame actual cuando no se esta
    // en una leccion de consola y para que tambien se adapate cuando cambie el tamaño del lienzo (canvas)
    useEffect(() => {
        // Verificacion si la leccion no es de tipo 'consola' y si ya existe un 'currentFrame' o frame actual
        if (!leccionInfo.isConsole && currentFrame) {
            // Actualiza el lienzo (canvas) con el frame actual
            updateCanvas(currentFrame)
        }
    }, [canvasSize])


    // Realiza la animacion en el lienzo (canvas) cada vez 'frames' cambie
    useEffect(() => {
        // Verificacion si la leccion no es de tipo 'consola' y si el lienzo (canvas) existe y si existen frames
        if (!leccionInfo.isConsole && canvasRef.current && frames) {
            // Obtencion del contexto 2D del lienzo (canvas)
            const context = canvasRef.current.getContext('2d')
            // Limpieza de contenido previo en  lienzo (canvas)
            context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

            // Comprobacion si hay frames para mostrar
            if (frames.length > 0) {
                // Renderiza la animacion
                renderAnimation()
            }
        }
    }, [frames])

    const [expand, setExpand] = useState(false);

    const handleClick = () => {
        setExpand(!expand);
    };

    

    return (
        <>
            {(leccionInfo &&

                <div className="grid grid-cols-2 grid-rows-6 gap-5 mx-4 py-2 h-screen overflow-hidden">

                    <section className="row-span-6">
                        <div id="theoryTitle" className="relative overflow-hidden h-min max-h-[calc(100%-48px-1.5rem)] mb-[1.5rem]">
                            
                            <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 cursor-pointer" onClick={handleClick} />

                            <div  className={`bg-[#1A4781] h-12 pl-5 flex items-center cursor-pointer rounded-t-[10px]`}>
                                <HiOutlineDocumentText size={22}/>
                                <h1 className="ml-2 text-lg font-semibold text-white">Teoria</h1>
                            </div>
                            <div className={`absolute top-3 right-3 text-white pointer-events-none transition-transform duration-500 ${expand ? "rotate-0" : "rotate-180"} `} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>


                            <div ref={theoryScrollRef} className={` text-stone transition-all overflow-y-scroll duration-1000  ${expand ? "h-0" : "h-[84vh] "}`}>
                                {leccionInfo.enunciado}
                            </div>
                            
                        </div>

                        <div id="instructionsTitle" className="relative overflow-hidden h-min max-h-[calc(100%-48px-1.5rem)]">
                            <input type="checkbox" id="instructionsOpen" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 cursor-pointer" 
                            onClick={handleClick} />

                            <div  className="bg-[#1A4781] h-12 pl-5 flex items-center cursor-pointer rounded-t-[10px]">
                                <FaAlignJustify size={16}/>
                                <h1 className="ml-2 text-lg font-semibold text-white">Objetivos</h1>
                            </div>
                            <div className={`absolute top-3 right-3 text-white  pointer-events-none transition-transform duration-500 ${expand ? "rotate-180" : "rotate-0"}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>


                            <div className={`bg-white text-stone-900 transition-all duration-1000 overflow-y-scroll ${expand ? "h-[84vh]  pb-[100px]" : "h-0"}`}>
                                {leccionInfo.instrucciones}
                            </div>
                        </div>


                    
                    </section>

                    {/* Seccion de editor de codigo */}
                    <section className="row-span-3">
                        <CodingSection onResult={handleResultado} leccionInfo={leccionInfo} />
                    </section>
                    
                    { leccionInfo.isConsole &&  
                            <section id="consoleTitle" className="overflow-y-hidden bg-foreground rounded-[10px] row-span-3">
                                <div  className="sticky top-0 flex items-center bg-foreground h-12 pl-5 text-2xl font-thin">
                                    <MdQuestionAnswer/>
                                    <h1 className="ml-2 text-lg font-semibold text-white">Consola</h1>
                                </div>

                                <div className="p-2 bg-foreground ">
                                    <div className="bg-background h-[39vh] overflow-y-scroll  rounded-[10px] text-white p-5">
                                            {resultado.split(/\r?\n/).map((res, index) => {
                                                return (<div key={index}><code >{res}</code><br /></div>)

                                            })}
                                    </div>
                                </div>
                            </section>

                        ||

                            <section className="h-12 rounded-[10px]">
                                <div className="sticky top-0 flex items-center bg-foreground rounded-t-[10px]  h-12 pl-5 text-2xl font-thin">
                                    <MdQuestionAnswer/>
                                    <h1 className="ml-2 text-lg font-semibold text-white">Visualizador</h1>
                                </div>
                                <canvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height} style={{height : "calc(46vh - 30px)"}} className="bg-white border-[3px] w-full border-background  rounded-b-[10px]" />
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

export default Lesson;
