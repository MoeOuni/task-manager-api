var express = require('express');

var authCtr = require("../controllers/auth");


const router = express.Router();

router.post('/signup', authCtr.signup);
router.post('/login', authCtr.login);

module.exports = router;