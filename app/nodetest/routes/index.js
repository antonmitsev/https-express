var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
<<<<<<< HEAD
  res.render('index', { title: 'Expressius Nodetest (route change)' });
=======
  res.render('index', { title: 'Expressius' });
>>>>>>> fa8e4d71558726a8086b8f31fa848d88dd6e315b
});

module.exports = router;
