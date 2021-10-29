require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const hbs = require('hbs');
const { isFirstElement } = require('./views/helpers/isFirstElement');

const indexRouter = require('./routes/indexRouter');
const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');

const app = express();
const { PORT } = process.env || 3000;

// view engine setup
app.set('views', path.join(process.env.PWD, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(process.env.PWD, 'views/partials'));
hbs.registerHelper('isFirstElement', isFirstElement);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.env.PWD, 'public')));

// app.use((req, res, next) => {
//   res.locals.user = req.session.user;
//   next();
// });

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/user', userRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});

module.exports = app;
