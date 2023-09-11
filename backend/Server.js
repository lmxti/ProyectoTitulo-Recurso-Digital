const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3001;

app.use(express.json());

app.post('/execute', (req, res) => {
    const userCode = req.body.code; // Assuming the request body contains the Java code
    // Save the user's Java code to a .java file
    // Compile the Java code using 'javac'
    // Execute the compiled code using 'java'

    exec(`echo ${userCode} > ./Main.java && javac Main.java && java Main`, (error, stdout, stderr) => {
        
        console.log(error, stdout, stderr)
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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
