/**
 * Created by Administrator on 2017/12/18.
 */
let express = require('express');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
const session = require("express-session");
const favicon = require('serve-favicon');


let ejs = require('ejs');
let fs = require('fs');
let path = require('path');
let app = express();
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
app.use(favicon(path.join(__dirname,'../view/static/images/icon/webicon.png')));
//日志配置打印
let logger = require('../log/log.js');
//let accessLogStream = fs.createWriteStream(path.join(__dirname,'../log/access.log'), {flags: 'a'});
//app.use(logger('log',{stream: accessLogStream}));//写入文件

app.use(logger('log'));//控制台打印

//配置解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//配置静态文件目录
app.use("/static",express.static(path.join(__dirname, '../view/static')));

//配置模板引擎
app.set('views', path.join(__dirname, '../view'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.use(session({
    secret: 'i_touch',
    key: 'sid',
    name: 'i_touch',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},//登录状态有效期：30天
    resave: false,
    saveUninitialized: true
}));

//配置跨域请求
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    /*res.header("X-Powered-By",' 3.2.1');
     res.header("Content-Type", "application/json;charset=utf-8");*/
    next();
});

//前端配置路由
let index = require('../route/index');
app.use("/",index);


//api接口配置
let userAPI = require('../api/iTouchAPI');
app.use("/api",userAPI);

// 监听404错误，并转向错误处理
app.use(function(req, res, next) {
    next()
});


module.exports = app;
