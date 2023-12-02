const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    if(!req.headers.cookie){
        return res.status(401).json({ error: 'Inautorizado: No hay cookie' }); 
    }

    const userCookie = req.headers.cookie.split('; ').find(pair => pair.startsWith('user='));

    let token;
    if (userCookie) {
        token = userCookie.split('=')[1];
    }
    if (!token) {
        return res.status(401).json({ error: 'Inautorizado: No hay token' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // Attach the decoded payload to the request for further use
        req.user = decoded.userId;

        next(); // User is authenticated, continue to the next middleware or route handler
    } catch (error) {
        console.error('Token verification failed:', error);
        return res.status(401).json({ error: 'Inautorizado: No hay token' });
    }
};

module.exports = { authenticateUser };