import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { java } from "@codemirror/lang-java";
import { aura } from "@uiw/codemirror-theme-aura";

const executeCode = async (code) => {
  return await fetch("/api/execute", {
    method: "POST",
    body: JSON.stringify({ code: code.replace(/[\r\n]/gm, "") }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data.output;
    })
    .catch((error) => {
      throw error;
    });
};

const codeExample = `
        
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
}


`;

const extensions = [java()];

const CodingSection = ({ onResult }) => {
  const [code, setCode] = useState(codeExample);
  
  const onChange = React.useCallback((value, viewUpdate) => {
    setCode(value);
  }, []);


  const execCode = () => {
    executeCode(code).then((res) => {
      onResult(res);
    }).catch((error) => {
      onResult(`Error: ${error.message}`);
    });
  };

  return (
    <div>
      {/* Code header section */}
      <div className="bg-accent rounded-t-lg flex justify-between p-2 font-thin">
        <h2 className="text-2xl">Compilador</h2>
        <button onClick={execCode} className="bg-primary text-background px-6 rounded-lg hover:bg-secondary font-bold hover:text-text">
          Ejecutar
        </button>
      </div>

      {/* Code section */}
      <div className="bg-white p-2 text-[18px] rounded-b-lg">

      <CodeMirror
        value={code}
        height={"450px"}
        theme={aura}
        extensions={extensions}
        onChange={onChange}
        basicSetup={{ searchKeymap: false }}
      />
      </div>
    </div>
  );
};

export default CodingSection;
