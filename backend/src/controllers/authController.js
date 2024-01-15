const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


const Register = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body, username, password)
        const user = new User({ username, password, completedLessons : [] });
        
        await user.save();
        
        const auxUser = user.toObject();
        delete auxUser.password;


        res.status(200).json(auxUser);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({error : error.message});
    }
}


const Login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        console.log(req.body)
        
        if (!user) {
            return res.status(401).json({ error: 'Nombre o contraseña incorrecto' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Nombre o contraseña incorrecto' });
        }
        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '4h' });
        
        // Send the token to the client (e.g., set it as a cookie)
        res.cookie('user', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 4 }); //4 horas
        

        const auxUser = user.toObject();
        delete auxUser.password;
        console.log(auxUser)
        res.status(200).json(auxUser);
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({error : error.message});
    }
}

const Logout = () =>{
    try {
        res.cookie('user', '', { httpOnly: true, maxAge: 0 }); 

        res.status(200).json({message : 'Sesion Cerrada'});
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({error : error.message});
    }
}



module.exports = {
    Register,
    Login,
    Logout
};