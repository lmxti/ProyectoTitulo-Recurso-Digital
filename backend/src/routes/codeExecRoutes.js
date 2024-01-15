const express = require('express');
const router = express.Router();
const codeExecController = require('../controllers/codeExecController');

router.post('/', codeExecController.executeCode)

module.exports = router;