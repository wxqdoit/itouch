/**
 * Created by Administrator on 2018/1/30.
 */
const BaseResponse = require("../util/baseResponseUtil.js");
const resp_code = require("../util/respcodeUtil.js");
const ITouchDao = require("../dao/iTouchDao.js");

const iTouchDao = new ITouchDao();
const baseResponse = new BaseResponse();
module.exports = class ITouchService {

    /**
     * 根据id查找文章
     * @returns {Promise}
     */
    getITouchByRandom() {
        return new Promise((resolve) => {
            iTouchDao.findByRandom().then(res => {
                resolve(baseResponse.successResp(resp_code.SUCCESS, "查询成功", res))
            }).catch(res => {
                resolve(baseResponse.failResp(resp_code.FAIL, "服务器出错啦^_^!", res.message))
            })

        })
    };


    /**
     * 创建
     * @param i_touch
     * @returns {Promise}
     */
    createITouch(i_touch) {
        return new Promise((resolve) => {
            iTouchDao.createITouch(i_touch).then(res => {
                resolve(baseResponse.successResp(resp_code.SUCCESS, "添加成功", res))
            }).catch(res => {
                resolve(baseResponse.failResp(resp_code.FAIL, "添加失败", res.message))
            })
        })
    }


};