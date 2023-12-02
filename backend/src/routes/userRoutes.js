const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/find/:id', userController.GetUser);
router.post('/complete/:lessonId', userController.CompleteLesson);

module.exports = router;