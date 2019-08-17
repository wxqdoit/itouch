/**
 * Created by Administrator on 2018/1/25.
 */
module.exports = class BaseResponse{
    successResp(code,msg,data){
        return {
            code : code,
            msg : msg,
            data : data,
            timestamp : new Date().getTime()
        };
    };
    failResp(code,msg,data){
        return {
            code : code,
            msg : msg,
            data : data,
            timestamp : new Date().getTime()
        };
    }
};

