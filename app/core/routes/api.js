var express = require('express');
var router = express.Router();

var myRouter = function (req, res, next) {
  const response = getResponse(req);
  console.log(response);
  res.send({...response} );
}

router.use('/:apiName?', myRouter);

function getResponse(params){
  return({
    params: {
      ...params.params
    },
    query: {
      ...params.query
    },
    reqMethod: params.method || null

  });
}

  
module.exports = router;
