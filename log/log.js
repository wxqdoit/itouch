/**
 * Created by Administrator on 2017/12/18.
 */
let morgan = require('morgan');
// 自定义token
morgan.token('_data', function(req, res){
    let data = new Date();
    return data.toDateString()+" "+data.toTimeString()
});

// 自定义format，其中包含自定义的token
morgan.format('log',
    //时间 远程地址 请求方法 请求路径 Http版本 状态码 响应时间
    '[log at :_data]  :remote-addr  :method  :url  HTTP/:http-version  :status  :response-time ms');
module.exports = morgan;