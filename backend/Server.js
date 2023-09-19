// Base module that provides utilities and functions for HTTP routes and handlers
const express = require('express');
// Method from the "child_process" library that generates a shell and allows a command to be executed
const { exec } = require('child_process');
const { log } = require('console');

// Instance of an Express application "app"
const app = express();
// Server port number definition
const port = 3001;

// Middleware that parses JSON content of requests and makes them accessible in "req.body".
app.use(express.json());

// HTTP POST request path that executes Java code (Assuming the request body contains the Java code)
app.post('/execute', (req, res) => {
    // Storage of user code in "userCode".
    const userCode = req.body.code;

    /* Creating a shell and executing a series of commands
        "echo ${userCode} > ./Main.java" : Creates a file called "Main.java" and writes the user's code to it
        "javac Main.java" : Compiles the Java code and if the compilation is successful creates a file 'Main.class'
        "java Main" : Executes the compiled Java code and prints the output to the console
    */
    exec(`echo ${userCode} > ./Main.java && javac Main.java && java Main`, (error, stdout, stderr) => {
        if (error) {
            console.log(error)
            res.status(500).json({ error: error.message, output: stderr });
        } else {
            console.log(stdout)
            res.status(200).json({ output: stdout });
        }
    });
});

app.get('/execute', (req, res) => {
            res.status(200).json("lel");
});

// Server start on the port number specified by {port}.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
