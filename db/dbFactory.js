/**
 * Created by wangxiaoqiang on 2017/8/29.
 */
const Sequelize = require('sequelize');
const db = new Sequelize('i_touch', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});
db.authenticate().then(() => {
    console.log('建立连接成功...');
}).catch(err => {
    console.error('数据库连接失败', err);
});
module.exports = db;
