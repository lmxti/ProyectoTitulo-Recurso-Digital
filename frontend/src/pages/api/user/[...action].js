

export default async function handler(req, res) {
    const { action } = req.query
    try {
        
        const response = await fetch('http://localhost:3001/user/' + action.join('/'), {
            method: req.method,
            headers: {
                cookie: req.headers.cookie,
                ...req.body.headers
            },
            body : JSON.stringify(req.body.data)
        })

        const data = await response.json();
        res.status(response.status).json(data);

    } catch (error) {
        // Handle network errors or other issues
        res.status(500).json({ error: 'Internal Server Error' });
    }

};
