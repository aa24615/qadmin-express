var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('iframe/index', { title: 'Express' });
});

router.get('/index.html', function(req, res, next) {
  res.render('iframe/index', { title: 'Express' });
});

router.get('/main.html', function(req, res, next) {
  res.render('iframe/main', { title: 'Express' });
});

router.get('/*', function(req, res, next) {
  res.render('iframe/empty', { path: req.path });
});

module.exports = router;
