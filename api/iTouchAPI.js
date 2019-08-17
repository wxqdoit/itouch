/**
 * Created by wxqdoit on 2018/3/28.
 */
const express = require('express');
const ITouchService = require('../service/iTouchService');
const resp_code = require("../util/respcodeUtil");
const BaseResponse = require("../util/baseResponseUtil");
const app = express();
const iTouchService = new ITouchService();

let baseResponse  = new BaseResponse();
/**
 * 根据id查找文章
 */
app.get('/itouch', async(req, res) => {
    res.send(await iTouchService.getITouchByRandom())
});


/**
 * 添加文章
 */
/*app.post('/article/create', async(req, res) => {
    let a_data = req.body;
    if(a_data.token === req.session.token){
        a_data.auth_id = req.session.user.id;
        res.send(await articleService.createArticle(a_data))
    }else {
        res.send(baseResponse.failResp(resp_code.FAIL,"登录已过期，添加失败",'登录已过期'))
    }
});*/

module.exports = app;