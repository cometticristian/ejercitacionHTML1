var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/metegol', function(req, res, next) {
  res.render('news');
});

module.exports = router;