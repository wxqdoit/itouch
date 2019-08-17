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
     * 创建文章
     * @param article
     * @returns {Promise}
     */
    createArticle(article) {
        return new Promise((resolve) => {
            // articleDao.create(articleBean.setArticle(article)).then(res => {
            //     categoryDao.create_a2c_rel(categoryBean.set_a2c_rel(res.id, article.category_arr)).then(res1 => {
            //         resolve(baseResponse.successResp(resp_code.SUCCESS, "添加成功", res1.message))
            //     }).catch(_res1 => {
            //         resolve(baseResponse.failResp(resp_code.FAIL, "添加失败", _res1.message))
            //     })
            // }).catch(res => {
            //     resolve(baseResponse.failResp(resp_code.FAIL, "添加失败", res.message))
            // })
        })
    }


};