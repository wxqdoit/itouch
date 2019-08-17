/**
 * Created by Administrator on 2017/12/19.
 */
const Sequelize = require('sequelize');
const db = require("./dbFactory");
/**
 * 创建用户表
 * @type {*}
 */
const i_touch = db.define('i_touch',{
    id: {type : Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    i_touch:{type : Sequelize.STRING,unique:true},
    from:{type:Sequelize.STRING,unique:true},
    img_url:{type:Sequelize.STRING},
    create_time:{type:Sequelize.STRING},
    type:{type:Sequelize.STRING},
    status:{type:Sequelize.STRING}
});

/**
 * 创建表的时候会自动添加createdAt updatedAt 两个字段
 * 如果表不存在，则创建表
 */

i_touch.sync().then();

module.exports = {
    i_touch:i_touch,

};