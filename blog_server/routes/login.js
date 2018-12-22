var express = require('express');
var router = express.Router();
var querystring = require("querystring");

var indexmodel = require("./../model/loginmodel.js");
// var test = indexmodel.test;
var login = indexmodel.login;
var havethisname = indexmodel.havethisname;
var savename = indexmodel.savename;



// /* GET users listing. */
// router.post('/test', function(req, res, next) {
//     // console.log(req);
//     // for(var key in req.cookies){
//     //     console.log("cookie名:"+key);
//     //     console.log(",cookie值:"+req.cookies[key]+"<br />");
//     // }

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
//         test(1).then(function (data){
//             console.log(data);
//             if(data.affectedRows == 1){
//                 resdata['data'] = data;
//                 resdata['status'] = 1;
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




/**
 *
 用于登录，记录cookie信息等
 *
 @method login
 *
 @param { } 参数名 参数说明
 *
 *      {
            status:0=>'失败',1=>'成功',
            data:查询的username信息,
        }
*/

router.post('/login', function (req, res) {
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
        login(body).then(function (data){
            console.log(data);
            if(data.length > 0){
                resdata['data'] = data;
                resdata['status'] = 1;
                res.cookie('userid', data[0]['userid'], { expires: new Date(Date.now() + 3600000), httpOnly: true });
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



/**
 *
 用于查找user表是否含有特定username
 *
 @method haveUserName
 *
 @param { } 参数名 参数说明
 *
 *      {
            status:0=>'失败',1=>'成功',
            data:查询的username信息,
        }
*/

router.post('/haveUserName', function (req, res) {
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
        Object.keys(body).forEach((element, index, array) => {
            console.log(element);
            console.log(body.username);
            // 循环传过来的参数，有username执行开始执行havethisname
            if(element == "username"){

                // 业务开始
                havethisname(body.username).then(function (data){
                    resdata['data'] = data;
                    resdata['status'] = 1;
                    res.send(resdata);
                    res.end();
                },function (res){
                    resdata['data'] = res;
                    resdata['status'] = 0;
                    res.send(resdata);
                    res.end();
                });
            }
        });


    });
});





/**
 *
 用于注册用户信息，保存账号密码
 *
 @method savename
 *
 @param { } 参数名 参数说明
 *
 *      {
            status:0=>'失败',1=>'成功',
            data:查询的username信息,
        }
*/

router.post('/savename', function (req, res) {
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
        savename(body).then(function (data){
            resdata['data'] = data;
            resdata['status'] = 1;
            res.send(resdata);
            res.end();
        },function (res){
            resdata['data'] = res;
            resdata['status'] = 0;
            res.send(resdata);
            res.end();
        });
    });
});




module.exports = router;
