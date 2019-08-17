/**
 * Created by wxqdoit on 2018/3/28.
 */
const fs = require("fs");
const path_up = require('path');
const multiparty = require('multiparty');
const FileDao = require("../dao/fileDao.js");
const fileDao = new FileDao();
module.exports = class FileService{
    uploadImg(req){
        return new Promise((resolve,reject)=>{
            let form = new multiparty.Form();//实例一个multiparty
            form.uploadDir = path_up.resolve(__dirname,'../../client/static/upload');
            form.parse(req, function (err, fields, files) {//开始解析前台传过来的文件
                if(err){
                    resolve(err)
                }else {
                    let data_files = [];
                    for(let i = 0 ;i<files.img.length;i++){
                        let obj = {};
                        //记住centos下面 路径是/ 如/static/upload/
                        obj.file_name ='/static/upload/'+files.img[i].path.split('upload\\')[1];
                        obj.file_size = (files.img[i].size/1024).toFixed(2);
                        obj.origin_name = files.img[i].originalFilename;
                        obj.create_time = new Date().getTime();
                        data_files.push(obj)
                    }
                    resolve(fileDao.bulkCreate(data_files));
                }
            });
        });
    }
};