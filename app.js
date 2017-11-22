var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var index = require('./routes/index');
var logsModel = require('./model/logs.model');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use((req, res, next) => {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Config database
mongoose.connect('<Your URL DATABASE>', {
  useMongoClient: true
})
mongoose.connection.on('connected', () => {
  console.log("Database is connected");
  // delete log every 1 min
  setInterval(() => {
    logsModel.getAllLogs((err, result) => {
      if (err) {
        throw err;
      }
      if (result && result.length > 12) {
        for (let index = 13; index < result.length; index++) {
          logsModel.deleteLogs(result[index]['_id'], (err, resultDel) => {
            if (err) {
              throw err;
            }
            console.log("Deleted")
          })
        }
      } else {
        console.log("There is nothing to delete");
      }
    })
  }, 3600);
});
mongoose.connection.on("error", (err) => {
  console.log("Could not connect to mongo server!", err);
});
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
