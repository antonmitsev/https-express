var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function (req, res) {
  res.send('Tony');
})
router.get('/:userId', function (req, res) {
  res.send(req.params)
})



module.exports = router;
