

export default async function handler(req, res) {
    const { route } = req.query
    try {
        const response = await fetch('http://localhost:3001/auth/' + route, {
            method: req.method,
            headers: {
                cookie: req.headers.cookie,
                ...req.body.headers
            },
            body : JSON.stringify(req.body.data)
        })

        const data = await response.json();
        
        if(response.ok){
            const setCookieHeader = response.headers.get('Set-Cookie');
            if (setCookieHeader) {
              // Set the received cookies in the API response
              res.setHeader('Set-Cookie', setCookieHeader);
            } 
        }
        
        res.status(response.status).json(data);

    } catch (error) {
        // Handle network errors or other issues
        res.status(500).json({ error: 'Internal Server Error' });
    }

};