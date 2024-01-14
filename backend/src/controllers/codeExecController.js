
const fs = require('fs');
const { exec } = require('child_process');


// Configuracion de directorio de trabajo actual (cwd = current working directory) para ejecutar comandos con 'exec'
const options = {
    cwd: './src/java',
};

const javaMainDir = './src/java/src/com/heart/app/Main.java'

const waitFunctionRegex = /Esperar\(\);/g;  // Regular expression to match "Esperar();" lines    

/**
 *  Ejecuta el código del usuario y devuelve el resultado de la ejecución.
 *  @param {string} req.body.code - Código del usuario.
 */
const executeCode = async (req, res) => {

    // Almacenamiento del codigo de usuario en una variable 'userCode'
    let userCode = req.body.code;

    const user = req.user
    console.log(user)
    // Se debe verificar funciones?
    const functionsToCheck = req.body.functionCheckInfo;

    //console.log("BODY", req.body.code.replace(/\n+/g, '\n'))


    checkValidity(userCode.replace(waitFunctionRegex, '//Esperar();'), res, (isValid) => {
        if (isValid) {
            if (functionsToCheck) {
                checkFunctions(userCode.replace(waitFunctionRegex, '//Esperar();'), functionsToCheck, (functionsResult) => {
                    userCode = formatCode(userCode);
                    fs.writeFileSync(javaMainDir, userCode); // Save 'Main.java' inside the 'java' folder

                    /* Creating a shell and executing a series of commands
                        "echo ${userCode} > ./Main.java" : Creates a file called "Main.java" and writes the user's code to it
                        "javac Main.java" : Compiles the Java code and if the compilation is successful creates a file 'Main.class'
                        "java Main" : Executes the compiled Java code and prints the output to the console
                    */

                    /*
                    
                    EN LINUX ES './lib/*' en windows sin comillas ./lib/*   --->FUCK
                    in case of libs change use = javac -encoding UTF-8  -cp ./lib/*  -d . src/com/heart/app/*.java
                     otherwise = javac -encoding UTF-8  -d . src/com/heart/app/Main.java*/

                    exec(`javac -d . src/com/heart/app/Main.java && jar cfm executer${user}.jar MANIFEST.MF com/heart/app/*.class && java -jar executer${user}.jar`, options, (error, stdout, stderr) => {
                        if (error) {

                            res.status(500).json({ error: "Error en el codigo", output: stderr });
                        } else {
                            console.log(stdout)
                            res.status(200).json({ output: stdout, functionsResult });
                        }
                    });
                })
            } else {
                // Formateo del codigo de usuario
                userCode = formatCode(userCode);
                // Escritura del codigo de usuario en el archivo 'Main.java' dentro de la carpeta 'java'
                fs.writeFileSync(javaMainDir, userCode);

                // Ejecucion del codigo de usuario
                exec(`javac -d . src/com/heart/app/Main.java && jar cfm executer${user}.jar MANIFEST.MF com/heart/app/*.class && java -jar executer${user}.jar`, options, (error, stdout, stderr) => {
                    if (error) {
                        console.log("message------------", error.message);
                        

                        res.status(500).json({ error: "Error en el codigo", output: extractErrors(error, -2) });
                    } else {
                        console.log("DONE OK", stdout, stderr);
                        res.status(200).json({ output: stdout });
                    }
                });
            }



        }
    })

}

const checkValidity = (dummyCode, res, callback) => {

    /*   if (isUnsafeCode(dummyCode)) {
          res.status(500).json({ error: "Codigo Inseguro" });
          return;
      } 
   */
    if (dummyCode.match(/import\s+\w+(\.\w+)*\s*;\s*/g) != null) {//false){//dummyCode.match(/import\s+\w+(\.\w+)*\s*;\s*/g) != null){

        res.status(500).json({ error: "No puede se permiten imports" });
        callback(false);
        return
    }

    //userCode = userCode.replace(/import\s+\w+(\.\w+)*\s*;\s*/g, ''); 

    // Get the current working directory
    const currentDirectory = process.cwd();

    let auxDummyCode = dummyCode
    let mainFunctionMatch = extractMainFunction(auxDummyCode);

    if (mainFunctionMatch) {
        let mainFunctionContent = mainFunctionMatch
        mainFunctionContent = 'public static void main(String[] args) { System.setSecurityManager(new CustomSecurityManager()); \n '
            + mainFunctionContent.substring(mainFunctionContent.indexOf('{') + 1, mainFunctionContent.length - 1);

        auxDummyCode = auxDummyCode.replace(mainFunctionMatch, mainFunctionContent) +
            `\nclass CustomSecurityManager extends SecurityManager {

           
            @Override
            public void checkRead(String file) {
                if (!esRutaPermitida(file)) { 
                    System.err.println("Acceso no autorizado a la lectura de archivos " + file ); 
                    throw new SecurityException("Acceso no autorizado a la lectura de archivos " + file );
                }
            }

            @Override
            public void checkWrite(String file) {
                if (!esRutaPermitida(file)) {
                    System.err.println("Acceso no autorizado a la escritura de archivos " + file );
                    throw new SecurityException("Acceso no autorizado a la escritura de archivos");
                }
            }

            private boolean esRutaPermitida(String file) {
                return  !file.startsWith("C:") || file.startsWith("${currentDirectory.replace(/\\/g, '\\\\')}\\\\src\\\\java\\\\test\\\\");
            }

            @Override
            public void checkExec(String cmd) {
                System.err.println("No se pueden realizar comandos");
                throw new SecurityException("No se pueden realizar comandos");
            }

           
            @Override
            public void checkPropertyAccess(String key){
                
                    System.err.println("Que buscas? " );
                throw new SecurityException("Que buscas? ");
                
            }
        }   
        `;
    }
    console.log(auxDummyCode);

    fs.writeFileSync(javaMainDir, auxDummyCode, options);

    exec(` javac -d test src/com/heart/app/Main.java && cd test && java Main`, options, (error, stdout, stderr) => {

        if (error || stderr.split('\n').length > 3) {
            //console.log("vro", error, stderr)
            /* console.log("AAA",error) */
            console.log("erro: ", error)

            res.status(500).json({ error: (stderr ? stderr.split('\n')[2] : "Error en la validez el codigo"), output: (error ? extractErrors(error, -1) : undefined) });
            callback(false); // Pass false to the callback if there's an error
        } else {
            console.log("err: ", stderr)
            console.log(stdout)
            callback(true); // Pass true to the callback if everything is okay 
        }
    });

}

const checkFunctions = (code, functionsToCheck, callback) => {

    let dummyCode = code
    const regexe = /[;={]\s*([a-zA-Z][a-zA-Z0-9_]*\.)*[a-zA-Z][a-zA-Z0-9_]*\(\s*([^)]*)\s*\)(?=\s*;)/g



    while ((match = regexe.exec(code)) !== null) {
        const functionName = match[0].substring(0, match[0].indexOf("(")).substring(1).trim(); // Use match[0] to get the entire matched function call
        const argumentsList = match[2].split(/\s*,\s*/);

        console.log(`Function Call: ${functionName}`);
        console.log(`Arguments: ${argumentsList}`);

        const funcInfo = functionsToCheck.find((func) => func.name == functionName && argumentsList.length == func.params.length)
        if (funcInfo) {
            console.log(funcInfo.params)
            let funcContent = match[0]
            funcContent = funcContent + `\n;System.out.println("*g*${functionName}:" + ${functionName}(${funcInfo.params.join(',')}));\n`;

            dummyCode = dummyCode.replace(match[0], funcContent);

            //functionDeclarations.push({ returnType, functionName, params, index: match.index })
        }
    }

    console.log("On the code", dummyCode)

    fs.writeFileSync(javaMainDir, dummyCode, options);

    exec(`javac -d test src/com/heart/app/Main.java && cd test && java Main`, options, (error, stdout, stderr) => {
        if (error) {

            console.log(error)
            /*  res.status(500).json({ error: error.message, output: errorsInfo }); */
            callback(extractErrors(error, 0)); // Pass false to the callback if there's an error
        } else {
            console.log("PRUEBA DE FUNCIONES:", stdout.split('\r\n'))

            const filteredArray = stdout.split('\r\n').filter((str) => /.*\*g\*([^:]+):([^]*)/.test(str));

            const extractedData = filteredArray.map((str) => {
                const match = str.match(/.*\*g\*([^:]+):([^]*)/);
                if (match) {
                    const name = match[1];
                    const result = match[2];
                    return { name, result };
                }
                return null; // Handle cases where the regular expression doesn't match.
            });

            callback(extractedData); // Pass true to the callback if everything is okay
        }
    });
}
const extractErrors = (error, linesOffset) => {
    const regex = /^(?:src\/com\/heart\/app\/Main\.java:(\d+): error:)/gm;
    const matches = [...error.message.matchAll(regex)];


    // Extract content between errors
    const errorsInfo = matches.map((match, index, array) => {
        const lineNumber = match[1];
        const start = match.index + match[0].length;
        const end = index < array.length - 1 ? array[index + 1].index : undefined;

        return { line: parseInt(lineNumber) + linesOffset, msg: error.message.slice(start, end).trim() }

    });


    /*     for (const match of matches) {
            const lineNumber = match[1];
            const end = error.message.indexOf('\n', match.index + match.length);
    
            errorsInfo.push({ line: parseInt(lineNumber) + linesOffset, 
                msg: error.message.substring(match.index + match[0].length, 
                (error.message.includes("cannot find symbol") ? error.message.indexOf('\n', end + 2) : end )) })
        } */
    return errorsInfo
}

function extractMainFunction(code) {
    let mainFunction = '';
    let braceCount = 0;
    let withinMain = false;

    // Regular expression to find the start of the main function
    const regex = /public\s+static\s+void\s+main\s*\([^)]*\)/g;
    const matches = code.match(regex);

    if (matches) {
        // Find the first match
        const startIndex = code.indexOf(matches[0]);

        for (let i = startIndex; i < code.length; i++) {
            if (withinMain) {
                if (code[i] === '{') {
                    braceCount++;
                } else if (code[i] === '}') {
                    braceCount--;

                    if (braceCount === 0) {
                        withinMain = false;
                        break;
                    }
                }

                mainFunction += code[i];
            } else {
                mainFunction += code[i];

                if (code[i] === '{') {
                    withinMain = true;
                    braceCount = 1; // Start with one opening brace
                }
            }
        }
    }

    return mainFunction;
}

const formatCode = (code) => {

    const classDeclarationRegex = /public\s+class\s+Main\s+\{/; // Regular expression to match "public class Main {" line
    const objectCreationRegex = /(\w+(?:\[\d+\])?)\s*=\s*new\s+(\w+)\([^)]*\);/g; ///(\w+)\s+(\w+)\s*=\s*new\s+(\w+)\([^)]*\);/g  Regular expression to match object creation lines,

    let userCode = code


    userCode = "package com.heart.app;\n" + userCode;

    // Apply the regular expression to the main function content
    userCode = userCode.replace(objectCreationRegex, (match, variable, constructorArgs) => {
        return match + `\nUtils.current.storeObject(${variable});`;
    });


    userCode = userCode.replace(waitFunctionRegex, 'utils.saveObjectsState();');
    userCode = userCode.replace(classDeclarationRegex, (match) => {
        return match + '\nstatic Utils utils = new Utils();';
    });

    let mainFunctionMatch = extractMainFunction(userCode);

    if (mainFunctionMatch) {
        let mainFunctionContent = mainFunctionMatch
        mainFunctionContent = mainFunctionContent.substring(0, mainFunctionContent.length - 1) + 'Utils.current.printObjectList();\n';

        userCode = userCode.replace(mainFunctionMatch, mainFunctionContent);
    }

    return userCode
}
module.exports = {
    executeCode
};
