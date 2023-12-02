const express = require('express');
const { authenticateUser } = require('../middleware/userAuth');
const auth = require('../controllers/authController');

const router = express.Router();

router.post('/register', authenticateUser, auth.Register);
router.post('/logout', authenticateUser, auth.Logout);
router.post('/login', auth.Login);

module.exports = router;