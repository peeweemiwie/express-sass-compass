var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Codepen test' });
});

router.get('/animation', function(req, res, next) {
  res.render('animation', { title: 'CSS Animation' });
});

module.exports = router;
