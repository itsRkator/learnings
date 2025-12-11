const express = require('express');
const {
  getHashedPassword,
  getToken,
  getTokenConfirmation,
} = require('../controllers/auth-actions');

const router = express.Router();

router.get('/hashed-pw/:password', getHashedPassword);
router.post('/token', getToken);
router.post('/verify-token', getTokenConfirmation);

module.exports = router;
