import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { java } from '@codemirror/lang-java'
import { aura } from '@uiw/codemirror-theme-aura';

const executeCode = async (code) => {
    return await fetch('/api/execute', {
        method: 'POST',
        body: JSON.stringify({ code: code.replace(/[\r\n]/gm, '') })
    }).then((res) => res.json()).then(data => { return data.output })
        .catch(error => { throw error })
}

const codeExample = `
        
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
}


`

const extensions = [java()];

const CodingSection = () => {
    const [code, setCode] = useState(codeExample)

    const onChange = React.useCallback((value, viewUpdate) => {
        setCode(value)
    }, []);

    const execCode = ()=>{
        executeCode(code).then((res)=> console.log(res))
    }

    return (
        <div className='text-[18px] p-[1px] rounded-[10px] bg-accent shadow-md'>
            <div className='flex'>
                <h2 className="ml-[10px] text-2xl font-thin mb-1">Codigo</h2>
                <button onClick={execCode}
                    className="bg-primary text-background ml-auto mr-1 px-4 py-[5px] mb-[2px] rounded-[10px] hover:bg-secondary font-bold  hover:text-text " >
                    Execute
                </button>

            </div>
            <CodeMirror
                value={code}
                height="40vh"
                theme={aura}
                extensions={extensions}
                onChange={onChange}
                basicSetup={{ searchKeymap: false }}
            />

        </div>
    );
}

export default CodingSection;