
const fs = require('fs');
const { exec } = require('child_process');
const { log } = require('console');


// Configuracion de directorio de trabajo actual (cwd = current working directory) para ejecutar comandos con 'exec'
const options = {
    cwd: './src/java'
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
    userCode = userCode.replace(/import\s+\w+(\.\w+)*\s*;\s*/g, '');

    if (isUnsafeCode(userCode)) {
        res.status(500).json({ error: "Codigo Inseguro" });
        return;
    } 

    const user = req.user
    console.log(user)
    // Se debe verificar funciones?
    const functionsToCheck = req.body.functionCheckInfo;
    const regex = /^(?:src\\com\\heart\\app\\Main.java:(\d+): error:)/gm;

    console.log("BODY", req.body.code.replace(/\n+/g, '\n'))


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
                    /*in case of libs change use = javac -cp ./lib/* -d . src/com/heart/app/*.java
                     otherwise = javac -d . src/com/heart/app/Main.java*/

                    exec(`javac -d . src/com/heart/app/Main.java && jar cfm executer${user}.jar MANIFEST.MF com/heart/app/*.class && java -jar executer${user}.jar`, options, (error, stdout, stderr) => {
                        if (error) {
                            console.log("message------------", error.message);

                            res.status(500).json({ error: error.message, output: stderr });
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

                        res.status(500).json({ error: error.message, output: stderr });
                    } else {
                        console.log("DONE OK", stdout);
                        res.status(200).json({ output: stdout });
                    }
                });
            }



        }
    })

}

const checkValidity = (dummyCode, res, callback) => {

    fs.writeFileSync(javaMainDir, dummyCode, options);

    exec(`javac -d test src/com/heart/app/Main.java && cd test && java Main`, options, (error, stdout, stderr) => {
        if (error) {
            console.log(error)
            const regex = /^(?:src\\com\\heart\\app\\Main.java:(\d+): error:)/gm;
            const matches = error.message.matchAll(regex);
            const errorsInfo = []

            for (const match of matches) {
                const lineNumber = match[1];
                errorsInfo.push({ line: lineNumber, msg: error.message.substring(match.index + match[0].length, error.message.indexOf('\n', match.index + match.length)) })
            }

            res.status(500).json({ error: error.message, output: errorsInfo });
            callback(false); // Pass false to the callback if there's an error
        } else {
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
            const regex = /^(?:src\\com\\heart\\app\\Main.java:(\d+): error:)/gm;
            const matches = error.message.matchAll(regex);
            const errorsInfo = []

            for (const match of matches) {
                const lineNumber = match[1];
                errorsInfo.push({ line: lineNumber, msg: error.message.substring(match.index + match[0].length, error.message.indexOf('\n', match.index + match.length)) })
            }

            console.log("ERROR DE FUNCIONES:", errorsInfo)
            /*  res.status(500).json({ error: error.message, output: errorsInfo }); */
            callback(errorsInfo); // Pass false to the callback if there's an error
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
    const objectCreationRegex = /(\w+)\s*=\s*new\s+(\w+)\([^)]*\);/g; ///(\w+)\s+(\w+)\s*=\s*new\s+(\w+)\([^)]*\);/g  Regular expression to match object creation lines,

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

function isUnsafeCode(javaCode) {
    const blockedKeywords = [
        'Runtime',
        'ProcessBuilder',
        'exec',
        'java.lang.reflect',
        'System.getProperty',
        'Runtime.getRuntime().exec',
        'java.io.InputStream',
        'java.util.Scanner'
    ];

    for (const keyword of blockedKeywords) {
        if (javaCode.includes(keyword)) {
            return true;
        }
    }

    return false;
}

module.exports = {
    executeCode
};