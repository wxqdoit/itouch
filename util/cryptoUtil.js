/**
 * Created by Administrator on 2018/1/26.
 */
const crypto = require("crypto");
const crypto_kry = "i_love_you";
module.exports = class Crypto {
    encrypt (str) {
        let md5 = crypto.createHash("md5");
        let cipher = crypto.createCipher("aes192", crypto_kry); //设置加密类型 和 要使用的加密密钥
        let enc = cipher.update(str, "utf8", "hex");    //编码方式从utf-8转为hex;
        enc += cipher.final("hex"); //编码方式从转为hex;
        return enc; //返回加密后的字符串
    };

    decrypt (str) {
        let decipher= crypto.createDecipher('aes192',crypto_kry);
        let dec = decipher.update(str,'hex','utf8');
        dec += decipher.final('utf8');//编码方式转为utf-8;
        return dec;//返回解密后的字符串
    }
};