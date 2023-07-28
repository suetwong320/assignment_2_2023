var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET service page. */
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Service' });
});


module.exports = router;
