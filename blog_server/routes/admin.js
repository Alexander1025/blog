var express = require('express');
var router = express.Router();
var querystring = require("querystring");

var adminmodel = require("./../model/adminmodel.js");

var categoryadd = adminmodel.categoryadd;




/**
 *
 用于添加文章分类
 *
 @method categoryadd
 *
 @param { } 参数名 参数说明
 *
 *      {
            status:0=>'失败',1=>'成功',
            data:查询的category信息,
        }
*/

router.post('/categoryadd', function (req, res) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        // console.log("chunk:",chunk);
    });
    req.on('end', function () {
        // 生成返回格式对象
        let resdata = {};
        // 解析参数
        body = querystring.parse(body);  //将一个字符串反序列化为一个对象
        console.log("body:",body);

        // 业务开始
        categoryadd(body).then(function (data){
            console.log(data);
            if(data.length > 0){
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


// /**
//  *
//  用于添加文章分类
//  *
//  @method login
//  *
//  @param { } 参数名 参数说明
//  *
//  *      {
//             status:0=>'失败',1=>'成功',
//             data:查询的username信息,
//         }
// */

// router.post('/login', function (req, res) {
//     var body = "";
//     req.on('data', function (chunk) {
//         body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
//         // console.log("chunk:",chunk);
//     });
//     req.on('end', function () {
//         // 生成返回格式对象
//         let resdata = {};
//         // 解析参数
//         body = querystring.parse(body);  //将一个字符串反序列化为一个对象
//         console.log("body:",body);

//         // 业务开始
//         login(body).then(function (data){
//             console.log(data);
//             if(data.length > 0){
//                 resdata['data'] = data;
//                 resdata['status'] = 1;
//                 res.cookie('userid', data[0]['userid'], { expires: new Date(Date.now() + 3600000), httpOnly: true });
//                 res.send(resdata);
//                 res.end();
//             }else{
//                 resdata['data'] = data;
//                 resdata['status'] = 0;
//                 res.send(resdata);
//                 res.end();
//             }
//         },function (res){
//             resdata['data'] = res;
//             resdata['status'] = 0;
//             res.send(resdata);
//             res.end();
//         });
//     });
// });


module.exports = router;
