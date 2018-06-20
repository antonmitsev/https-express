//Core calls
var createError = require('http-errors');
var express = require('express');

//var cookieParser = require('cookie-parser');
//var logger = require('morgan');


class appl {
  /**
   * 
   * @param object options 
   * 
   * return object
   */
  constructor (options){
    const opt = options || {};
    const APPL_DIR = __dirname + '/' + (opt.applicationName ? '../' + opt.applicationName + '/' : './');
    const ROUTES_DIR = APPL_DIR + 'routes/';
    const indexRouter = require( ROUTES_DIR + 'index');
    const apiRouter = require( ROUTES_DIR + 'api');

    var app = express();
    app.use(express.static(APPL_DIR + 'public'));
    // view engine setup
    app.set('views', APPL_DIR + 'views');
    app.set('view engine', 'pug');
    //app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    //app.use(cookieParser());
    
    //app.use('/api', apiRouter);
    //app.use('/users', usersRouter);
    
    app.use('/', indexRouter);
    
    app.use('/api',function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    
    app.use('/api', apiRouter);
    
    /* app.get('/api/hello', (req, res) => {
      res.send({ express: 'Hello From Express' });
    });
     */
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
      next(createError(404));
    });
    
    // error handler
    app.use(function(err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};
    
      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });
    return app;
  }

}

module.exports = appl;
