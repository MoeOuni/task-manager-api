const express = require('express');
const userCtr = require("../controllers/user");
const authCtr = require("../controllers/auth");

const router = express.Router();

router.use(authCtr.protect);
router.get('/me', userCtr.getMe);

module.exports = router;
