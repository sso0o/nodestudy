// const createError = require('http-errors');
// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
//
// const dbConnect = require('./config/dbConnection')
//
// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
//
// const app = express();
//
// dbConnect();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use((err, req, res, next) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//
// module.exports = app;


require('dotenv').config(); // .env 파일 로드
const express = require('express');
const connectMongoDB = require('./config/dbConnection'); // MongoDB 연결 모듈

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB 연결
connectMongoDB();

app.get('/', (req, res) => {
  res.send('Hello, MongoDB!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
