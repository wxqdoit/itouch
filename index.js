/**
 * Created by Administrator on 2017/12/18.
 */
var app = require("./conf/conf");
const port = 80;
let server = app.listen(port);

//启动服务错误
server.on('error', function onError(error) {
    console.warn(error);
    if (error.syscall !== 'listen') {
        throw error;
    }
    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
});

//启动监听正确
server.on('listening', function onListening() {
    let addr = server.address();
    console.log("System start,listening at "+addr.port+".");
});





