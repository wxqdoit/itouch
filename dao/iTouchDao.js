/**
 * Created by Administrator on 2018/1/30.
 */
const tables = require("../db/tables");
const Sequelize = require('sequelize');
module.exports = class ITouchDao {

    findByRandom() {
        return tables.i_touch.findOne({order:tables.i_touch.sequelize.random()})
    };

    create(i_touch) {
        return tables.i_touch.create(i_touch)
    };

};