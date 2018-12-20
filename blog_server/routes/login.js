var express = require('express');
var router = express.Router();
var querystring = require("querystring");

var indexmodel = require("./../model/loginmodel.js");
var test = indexmodel.test;

/* GET users listing. */
router.post('/test', function(req, res, next) {
    // console.log(req);
    // for(var key in  req.cookies){
    //     console.log("cookie名:"+key);
    //     console.log(",cookie值:"+req.cookies[key]+"<br />");
    // }

    var body = "";
    req.on('data', function (chunk) {
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        console.log("chunk:",chunk);
    });
    req.on('end', function () {
        // 生成返回格式对象
        let resdata = {};
        // 解析参数
        body = querystring.parse(body);  //将一个字符串反序列化为一个对象
        console.log("body:",body);

        // 业务开始
        test(1).then(function (data){
            console.log(data);
            if(data.affectedRows == 1){
                resdata['data'] = data;
                resdata['status'] = 1;
                res.send(resdata);
                res.end();
            }else{
                resdata['data'] = data;
                resdata['status'] = 0;
                res.send(resdata);
                res.end();
            }
        },function (res){
            resdata['data'] = res;
            resdata['status'] = 0;
            res.send(resdata);
            res.end();
        });
    });
});




module.exports = router;
