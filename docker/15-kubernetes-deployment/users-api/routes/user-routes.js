const express = require('express');
const { createUser, verifyUser } = require('../controllers/user-actions');

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', verifyUser);

module.exports = router;
