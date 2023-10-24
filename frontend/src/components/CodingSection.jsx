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
            { label: "match", type: "keyword" },
            { label: "hello", type: "variable", info: "(World)" },
            { label: "magic", type: "text", apply: "⠁⭒*.✩.*⭒⠁", detail: "macro" }
        ]
    };
}

/**
 * Funcion para ejecutar el codigo en el lado del servidor (backend)
 * @param {string} code : Codigo a ejecutar
 * @param {string} functionCheckInfo : Informacion de la funcion a verificar
 * @returns {Promise} : Promesa que resuelve el resultado de la ejecucion
 */
const executeCode = async ({code, functionCheckInfo}) => {
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
const CodingSection = ({ onResult, lessonInfo }) => {
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
    const [code, setCode] = useState(lessonInfo.code);

    // Lineas de codigo erroneas
    const [errorLines, setErrorLines] = useState([])
    // Referencia al editor de codigo
    const editorRef = useRef(null);

    // Hook para actualizar el codigo de la leccion actual
    const onChange = React.useCallback((value, viewUpdate) => {
        setCode(value);
    }, []);
    
    // Hook que crea el editor de codigo y su configuracion
    const { view, setContainer } = useCodeMirror({
        container: editorRef.current,
        value: code,
        height: "40vh",
        theme: aura,
        extensions:  extensions,
        onChange: onChange,
        basicSetup: { searchKeymap: false, tabSize : 4 }
    });

   
    /**
     * Funcion que ejecuta el codigo en el lado del servidor (backend) y
     * en caso de error, registra las lineas de codigo con errores
     */
    const execCode = () => {
        // Llamado de funcion con parametros de ejecucion que ejecuta el codigo en el lado del servidor (backend)
        executeCode({code, functionCheckInfo : lessonInfo.functionToCheck}).then((res) => {
            // Devuelve el "output" (resultado de la ejecucion) y la
            console.log("CodingSection -> execCode ->", res);
            if (res.error) {
                // Seteo de lineas de codigo con errores
                setErrorLines(res.output); //Los errores SON [{msg : "MENSAJE DEL ERROR", line: "LINEA DEL ERROR"} ]
            } else {
                setErrorLines([])
                onResult({resCode : res.output, resFunctions : res.functionsResult});
            }
        }).catch((error) => {
            onResult(`Error: ${error.message}`);
        });
    };

    // NOTA: COMPROBAR FUNCIONAMIENTO (?)
    const printVisibleLines = () => {
        const rect = view.dom.getBoundingClientRect();
        //console.log(rect);
        const topVisibleLineBlock = view.lineBlockAtHeight(rect.top - view.documentTop);
        const bottomVisibleLineBlock = view.lineBlockAtHeight(rect.bottom - view.documentTop);
       /*  console.log(view.state.doc.lineAt(topVisibleLineBlock.from).number)

        console.log(topVisibleLineBlock);
        console.log(bottomVisibleLineBlock);  */
    }


    // Hook que actualiza la referencia al editor de codigo
    useEffect(() => {
        if (editorRef.current) {
            // Establece el elemento del DOM que contiene el editor de codigo
            setContainer(editorRef.current);
        }
    }, [editorRef.current, view]);

    return (
        <div>
            {/* Code header section */}
            <div className=" bg-accent rounded-t-lg flex justify-between p-2 font-thin">
                <h2 className="text-2xl">Compilador</h2>

                <div className="flex justify-around">
                <button onClick={execCode} className="bg-primary text-background px-6 rounded-lg hover:bg-secondary font-bold hover:text-text mr-2">
                    Ejecutar
                </button>
                <button 
                className="bg-primary text-background px-6 rounded-lg hover:bg-secondary font-bold hover:text-text">
                    Comprobar
                </button>
                </div>
            </div>

            {/* Code section */}
            <div className="bg-accent p-2 text-[18px] rounded-b-lg">
                <div onClick={printVisibleLines} ref={editorRef}></div>
            </div>
        </div>
    );
};

export default CodingSection;
