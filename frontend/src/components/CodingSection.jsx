import React, { useState, useRef, useEffect } from "react";
//import CodeMirror from "@uiw/react-codemirror";
import { useCodeMirror } from '@uiw/react-codemirror';
import { java } from "@codemirror/lang-java";
import { aura } from "@uiw/codemirror-theme-aura";
import { classname } from '@uiw/codemirror-extensions-classname';
/* import { EditorView } from "@uiw/react-codemirror"; */
import { autocompletion } from "@codemirror/autocomplete"

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


const executeCode = async ({code, functionCheckInfo}) => {
    return await fetch("/api/execute", {
        method: "POST",
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


const jav = java()


const CodingSection = ({ onResult, lessonInfo }) => {

    const classnameExt = classname({
        add: (lineNumber) => {
            if (Array.isArray(errorLines) && errorLines.some(obj => obj.line == lineNumber)) {
                return 'errorStyle selection:bg-white hover:bg-accent bg-foreground';
            }
        },
    });

    const extensions = [jav, classnameExt, autocompletion({ override: [myCompletions] })];
    const [code, setCode] = useState(lessonInfo.code);
    const [errorLines, setErrorLines] = useState([])
    const editorRef = useRef(null);

    const onChange = React.useCallback((value, viewUpdate) => {
        setCode(value);
    }, []);
    
    const { view, setContainer } = useCodeMirror({
        container: editorRef.current,
        value: code,
        height: "40vh",
        theme: aura,
        extensions:  extensions,
        onChange: onChange,
        basicSetup: { searchKeymap: false, tabSize : 4 }
    });


    const execCode = () => {
        executeCode({code, functionCheckInfo : lessonInfo.functionToCheck}).then((res) => {
            console.log("res", res)
            if (res.error) {
                setErrorLines(res.output) //LOS ERORES SON [{msg : "MENSAJE DEL ERROR", line: "LINEA DEL ERROR"} ]
            } else {
                setErrorLines([])
                onResult({resCode : res.output, resFunctions : res.functionsResult});
            }
        }).catch((error) => {
            onResult(`Error: ${error.message}`);
        });
    };

    

    const printVisibleLines = () => {
        const rect = view.dom.getBoundingClientRect();
        //console.log(rect);
        const topVisibleLineBlock = view.lineBlockAtHeight(rect.top - view.documentTop);
        const bottomVisibleLineBlock = view.lineBlockAtHeight(rect.bottom - view.documentTop);
       /*  console.log(view.state.doc.lineAt(topVisibleLineBlock.from).number)

        console.log(topVisibleLineBlock);
        console.log(bottomVisibleLineBlock);  */
    }

    
    useEffect(() => {
        if (editorRef.current) {
            setContainer(editorRef.current);
        }
    }, [editorRef.current, view]);

    

    return (
        <div>
            {/* Code header section */}
            <div className=" bg-accent rounded-t-lg flex justify-between p-2 font-thin">
                <h2 className="text-2xl">Compilador</h2>
                <button onClick={execCode} className="  bg-primary text-background px-6 rounded-lg hover:bg-secondary font-bold hover:text-text">
                    Ejecutar
                </button>
            </div>

            {/* Code section */}
            <div className="bg-accent p-2 text-[18px] rounded-b-lg">
                <div onClick={printVisibleLines} ref={editorRef}></div>
            </div>
        </div>
    );
};

export default CodingSection;
