// <--------------------------------HOOKS REACT---------------------------------------->
import React, { useState, useRef, useEffect } from "react";

// <----------------------------COMPONENTE EDITOR DE CODIGO---------------------------->
import { useCodeMirror } from '@uiw/react-codemirror';
//import CodeMirror from "@uiw/react-codemirror";

// <-----------------EXTENSIONES Y CONFIGURACION EDITOR DE CODIGO-------------------->
import { java } from "@codemirror/lang-java";
import { aura } from "@uiw/codemirror-theme-aura";
import { classname } from '@uiw/codemirror-extensions-classname';
import { autocompletion } from "@codemirror/autocomplete"
/* import { EditorView } from "@uiw/react-codemirror"; */

// <------------------------------------ICONOS---------------------------------------->
import { AiFillCode } from 'react-icons/ai'
import { FaPlay } from 'react-icons/fa'
import { BiSolidErrorCircle, BiSolidMessageAltError } from "react-icons/bi";
import { HiOutlineLightBulb } from 'react-icons/hi'

import Spinner from "./Spinner";
// <--------------------------------FUNCIONES---------------------------------------->

/**
 * Funcion para agregar autocompletado personalizado
 * @param {String} context : Objeto de contexto de autocompletado
 * @returns {Object|null} : Objeto que contiene sugerencias de autocompletado
 */
function myCompletions(context) { //OCUPAR DE PRUEBA
    let word = context.matchBefore(/\w*/);
    if (word.from == word.to && !context.explicit) {
        return null;
    }
    return {
        from: word.from,
        options: [
            { label: "System.out.println()", type: "function", detail: "function" },
            { label: "hello", type: "variable", info: "(World)" },
            { label: "match", type: "keyword", detail: "keyword" },
            { label: "magic", type: "text", apply: "⠁⭒*.✩.*⭒⠁", detail: "macro" },
        ]
    };
}

/**
 * Funcion para ejecutar el codigo en el lado del servidor (backend)
 * @param {string} code : Codigo a ejecutar
 * @param {string} functionCheckInfo : Informacion de la funcion a verificar
 * @returns {Promise} : Promesa que resuelve el resultado de la ejecucion
 */
const executeCode = async ({ code, functionCheckInfo }) => {
    return await fetch("/api/execute", {
        // Especifacion de metodo de solicitud
        method: "POST",
        // Especificacion de cuerpo de la peticion en formato "JSON" a traves de JSON.stringify
        body: JSON.stringify({ code, functionCheckInfo }),
    })
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            throw error;
        });
};





/* <-------------------------COMPONENTE EDITOR DE CODIGO-----------------------------> */
const CodingSection = ({ onResult, leccionInfo }) => {
    //  Lenguaje de editor de codigo
    const jav = java()
    // Extension para resaltar lineas de codigo con errores
    const classnameExt = classname({
        add: (lineNumber) => {
            if (Array.isArray(errorLines) && errorLines.some(obj => obj.line == lineNumber)) {
                return 'errorStyle selection:bg-white hover:bg-accent bg-foreground';
            }
        },
    });
    // Extensiones cargadas en el editor de codigo
    const extensions = [jav, classnameExt, autocompletion({ override: [myCompletions] })];
    // Codigo de la leccion actual
    const [code, setCode] = useState(leccionInfo.codeAnswer);
    const [userCode, setUserCode] = useState(leccionInfo.code);
    const [onUserCode, setOnUserCode] = useState(true)

    const [rectLeft, setRectLeft] = useState(1000)
    const [errorToShow, setErrorToShow] = useState(undefined)
    const [executingCode, setExecutingCode] = useState(false)
    // Lineas de codigo erroneas
    const [errorLines, setErrorLines] = useState([])


    useEffect(() => {
        setUserCode(leccionInfo.code)
        setOnUserCode(true)
        setCode(leccionInfo.code)
        if (container) {
            container.value = leccionInfo.code
            /* container.setAttribute("height", "100vh") */
        }
        setErrorToShow(undefined)
        setErrorLines([])
        
        //container.setAttribute()
    }, [leccionInfo.code])



    // Referencia al editor de codigo
    const editorRef = useRef(null);

    // Hook para actualizar el codigo de la leccion actual
    const onChange = React.useCallback((value, viewUpdate) => {
        setCode(value)
    }, []);

    // Hook que crea el editor de codigo y su configuracion
    const { view, setContainer, container, state, setState } = useCodeMirror({
        container: editorRef.current,
        value: code,
        height: "calc(50vh - 48px - 1.5rem)",
        theme: aura,
        extensions: extensions,
        onChange: onChange,
        basicSetup: { searchKeymap: false, tabSize: 4 },
    });


    /**
     * Funcion que ejecuta el codigo en el lado del servidor (backend) y
     * en caso de error, registra las lineas de codigo con errores
     */

    const execCode = async () => {
        setExecutingCode(true)
        onResult({ error: "Waiting..." })
        setErrorLines([])

        // Llamado de funcion con parametros de ejecucion que ejecuta el codigo en el lado del servidor (backend)
        await executeCode({ code, functionCheckInfo: leccionInfo.functionToCheck }).then((res) => {
            // Devuelve el "output" (resultado de la ejecucion) y la
            console.log("CodingSection -> execCode ->", res);
            if (res.error) {
                // Seteo de lineas de codigo con errores
                if (res.output) {
                    const resultArray = res.output.reduce((accumulator, current) => {
                        const existingItem = accumulator.find(item => item.line === current.line);
                        if (existingItem) {
                            existingItem.msg = [...new Set([existingItem.msg, current.msg].flat())];
                        } else {
                            accumulator.push({ line: current.line, msg: [current.msg] });
                        }
                        return accumulator;
                    }, []);
                    onResult({ error: `Error: ${res.error}` })
                    setErrorLines(resultArray); //Los errores SON [{msg : "MENSAJE DEL ERROR", line: "LINEA DEL ERROR"} ]

                } else {
                    onResult({ error: `Error: ${res.error}` })
                    setErrorLines([])
                }


            } else {
                setErrorLines([])
                onResult({ resCode: res.output, resFunctions: res.functionsResult });
            }
        }).catch((error) => {
            setErrorLines([])
            onResult(`Error: ${error.message}`);
        });

        setExecutingCode(false)
    };


    const showAnswer = () => {
        const switchCodeUser = !onUserCode
        setOnUserCode(switchCodeUser)
        if (container) {
            container.value = (switchCodeUser ? userCode : leccionInfo.codeAnswer)
        }

        setCode(switchCodeUser ? userCode : leccionInfo.codeAnswer)
    }


    // NOTA: COMPROBAR FUNCIONAMIENTO (?)
    const setErrorPos = () => {

        if (!errorLines || errorLines.length == 0) {
            return
        }
        const rect = view.dom.getBoundingClientRect();
        //console.log(rect);
        const topVisibleLineBlock = view.lineBlockAtHeight(rect.top - view.documentTop);
        const bottomVisibleLineBlock = view.lineBlockAtHeight(rect.bottom - view.documentTop);
        const topLine = view.state.doc.lineAt(topVisibleLineBlock.from).number
        const bottomLine = view.state.doc.lineAt(bottomVisibleLineBlock.from).number

        /* 
                console.log(topVisibleLineBlock) */
        /*console.log(view.state.doc.lineAt(topVisibleLineBlock.from).number) //from line
         console.log(view.state.doc.lineAt(bottomVisibleLineBlock.from).number) //to line

        console.log(topVisibleLineBlock);
        console.log(bottomVisibleLineBlock);
        console.log("TOP",rect.top) */


        setErrorLines((prev) => prev.map((error) => {
            return { ...error, y: (error.line <= topLine ? rect.top - 35 : (error.line >= bottomLine ? rect.bottom - 35 : (rect.top + 25 * ((error.line - 1.5) - topLine)))) }
        }))
    }

    const checkPos = () => {
        if (view) {
            const rect = view.dom.getBoundingClientRect();
            setRectLeft(rect.left + 30)
            setErrorPos()
        }
    }


    useEffect(() => {
        if (onUserCode) {
            setUserCode(code)
        }
    }, [code])


    // Hook que actualiza la referencia al editor de codigo
    useEffect(() => {
        if (editorRef.current) {
            // Establece el elemento del DOM que contiene el editor de codigo
            setContainer(editorRef.current);
        }
    }, [editorRef.current, view]);

    useEffect(() => {

        if (errorLines && errorLines.length > 0 && !errorLines[0].y) {

            checkPos()

        }

        window.addEventListener('resize', checkPos);
        window.addEventListener('scroll', checkPos);
        return () => {
            window.removeEventListener('resize', checkPos);
            window.removeEventListener('scroll', checkPos);
        };

    }, [errorLines])

    return (
        <div id="codeEditorTitle">
            {/* Code header section */}
            <div className="bg-foreground rounded-t-lg flex justify-between font-thin">
                <div className="flex items-center p-2 text-2xl font-thin">
                    <AiFillCode />
                    <h2 className="ml-2 text-lg font-semibold text-white">Editor de codigo</h2>
                </div>
                <div className="flex justify-around">
                    <button onClick={showAnswer} disabled={executingCode} id="hintButton"
                        className={`${onUserCode ? "bg-primary text-background hover:text-text hover:bg-emerald-500" : "hover:bg-accent hover:text-background text-text bg-accent"}   max-w-[60px] flex items-center rounded-lg  transition ease-in-out duration-500 font-bold px-6 m-2`}>

                        <HiOutlineLightBulb className="mx-auto scale-[2]" />
                    </button>
                    <button onClick={execCode} disabled={executingCode} id="executeButton" className="max-w-[60px] flex items-center bg-primary text-background rounded-lg  hover:bg-emerald-500 transition ease-in-out duration-500 font-bold hover:text-text px-6 m-2">
                        {(!executingCode && <FaPlay title="Compilar" size={20} className="mx-auto" />) || <Spinner color="var(--bg-color)" size={25} className={"ml-[-5px]"} parentClassName={"animate-pulse"} />}
                    </button>



                </div>
            </div>

            {/* Code section */}
            <div className="bg-foreground  p-2  text-[18px] rounded-b-lg">
                <div onScrollCapture={setErrorPos} onScroll={setErrorPos} ref={editorRef}></div>
            </div>

            {errorLines && errorLines.map((error, index) =>
                <BiSolidMessageAltError key={index} size={50} className="fixed fill-accent animate-bounce cursor-pointer shadow-2xl shadow-black" style={{ top: error.y, left: rectLeft }} onMouseEnter={() => setErrorToShow(index)} />

            )}

            {errorToShow != undefined &&
                <div className="fixed bg-background p-5 rounded-[10px] shadow-2xl border-[1px] border-foreground flex" style={{ top: errorLines[errorToShow].y - 25, left: rectLeft }} onMouseLeave={() => setErrorToShow(undefined)}>
                    <BiSolidErrorCircle size={25} className="fill-accent mr-3 my-auto" />
                    <h3 className=" text-justify text-md font-bold text-white font-mono " >
                        {errorLines[errorToShow].msg.map((msg, index) => (

                            <React.Fragment key={index}>
                                {"> "}{msg.split('\n').map((line, lineIndex) => (
                                    <span key={lineIndex}>
                                        {line[1].toUpperCase() + line.substring(2)}
                                        <br />
                                    </span>
                                ))}
                            </React.Fragment>)

                        )}

                    </h3>
                </div>}

        </div>
    );
};

export default CodingSection;
