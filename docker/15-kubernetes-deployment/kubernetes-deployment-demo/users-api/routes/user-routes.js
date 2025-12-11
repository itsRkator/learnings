const express = require('express');
const {
  createUser,
  verifyUser,
  getLogs,
} = require('../controllers/user-actions');

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', verifyUser);
router.get('/logs', getLogs);

module.exports = router;
