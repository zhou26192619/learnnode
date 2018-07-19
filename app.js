var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
app.use(express.static(path.resolve(__dirname, 'dist')));
// app.use(express.static(path.join(__dirname, 'dist')));
app.use("/dist",express.static('dist'));

app.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8');
    res.send(html);
});
app.listen(3000,function() {
    console.log('app listening on port 3000.')
});
module.exports = app;
