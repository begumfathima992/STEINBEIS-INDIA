const express = require('express');
const router = express.Router();
const {createUser} = require('../controllers/userController.js'); 
// const auth = require('../middleware/auth');

router.post('/create', createUser);
module.exports = router;