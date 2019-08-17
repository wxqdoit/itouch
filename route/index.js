/**
 * Created by Administrator on 2017/12/18.
 */
let express = require('express');
let router = express.Router();
let ITouchService = require('../service/iTouchService');
let iTouchService = new ITouchService();

/* GET home page. */
router.get('/',async function(req, res) {


        let i = await iTouchService.getITouchByRandom();
        res.render('index', {
            data:i.data
        });



});

router.get('/index',async function(req, res) {
    res.render('index', {});
});

module.exports = router;