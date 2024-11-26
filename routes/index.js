const express = require('express');
const router = express.Router();

router.get('/ping', function(req, res, next) {
  res.status(200).json({
    message: "pong"
  });
});

module.exports = router;
