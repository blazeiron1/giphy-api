var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var actorsRouter = require('./routes/actors');
var giphyRouter = require('./routes/giphys');

var app = express();
app.use('/api' ,require('cors')());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/giphy', giphyRouter);
app.use('/api/actors', actorsRouter);


module.exports = app;
