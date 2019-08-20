/**
 * Created by wxqdoit on 2018/3/28.
 */
const express = require('express');
const ITouchService = require('../service/iTouchService');
const resp_code = require("../util/respcodeUtil");
const BaseResponse = require("../util/baseResponseUtil");
const app = express();
const iTouchService = new ITouchService();
const STS = require('qcloud-cos-sts');
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
app.post('/create', async(req, res) => {
    console.log(req.body)
    res.send(await iTouchService.createITouch(req.body))
});

/**
 * 获取临时秘钥
 */
app.get('/credential', async(req, res) => {
    let policy = {
        'version': '2.0',
        'statement': [{
            'action': [
                // 简单上传
                'name/cos:PutObject',
                'name/cos:PostObject',
            ],
            'effect': 'allow',
            'principal': {'qcs': ['*']},
            'resource': [
                'qcs::cos:ap-chengdu:uid/1252754215:itachi-1252754215/cus-upload/*',
            ],
        }],
    };
    STS.getCredential({
        secretId: '',
        secretKey: '',
        policy: policy,
    }, function (err, credential) {
        if(err){
            res.send(baseResponse.successResp(resp_code.FAIL, "服务器出错辣^_^!", err))
        }
        if(credential){
            res.send(baseResponse.successResp(resp_code.SUCCESS, "获取成功", credential))
        }
    });

});

module.exports = app;