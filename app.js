const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const initMongo = require('./config/mongo');


const indexRouter = require('./routes/index');
const tradesRouter = require('./routes/trades');

const app = express();

app.set('port', process.env.PORT || 3333);

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/trades', tradesRouter);

app.listen(3333);

initMongo();
module.exports = app;
