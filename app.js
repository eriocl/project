require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const hbs = require('hbs')

const indexRouter = require("./routes/indexRouter");
const loginRouter = require("./routes/loginRouter");

const app = express();
const { PORT } = process.env;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

hbs.registerPartials(path.join(process.env.PWD, 'views/partials'))

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.env.PWD, "public")));

app.use("/", indexRouter);
app.use("/login", loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});

module.exports = app;
