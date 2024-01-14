

export default async function handler(req, res) {
    try {
        const response = await fetch('http://localhost:4000/execute/', {
            method: 'POST',
            headers: {
                cookie: req.headers.cookie,
                'Content-Type': 'application/json',
            },
            body: req.body
        })

        const data = await response.json();
        res.status(response.status).json(data);

    } catch (error) {
        // Handle network errors or other issues
        res.status(500).json({ error: 'Internal Server Error' });
    }

};
