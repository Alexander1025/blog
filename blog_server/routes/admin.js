var express = require('express');
var router = express.Router();
var fs = require('fs');
var querystring = require("querystring");
const Buffer = require('buffer').Buffer;


var adminmodel = require("./../model/adminmodel.js");

// 文章分类操作
var categoryadd = adminmodel.categoryadd;
var categoryget = adminmodel.categoryget;
var categorygetmod = adminmodel.categorygetmod;
var categorysetmod = adminmodel.categorysetmod;

// 文章操作
var articleadd = adminmodel.articleadd;
var articleget = adminmodel.articleget;
var articlegetmod = adminmodel.articlegetmod;
var articlesetmod = adminmodel.articlesetmod;







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
        if(!req.cookies['userid'] || req.cookies['userid'] == ""){
            resdata['data'] = "请登录";
            resdata['status'] = -1;
            res.send(resdata);
            res.end();
            return false;
        }
        // 业务开始
        categoryadd(body).then(function (data){
            console.log(data);
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


/**
 *
 用于获取文章分类
 *
 @method categoryget
 *
 @param { } 参数名 参数说明
 *
 *      {
            status:0=>'失败',1=>'成功',
            data:查询的category信息,
        }
*/

router.post('/categoryget', function (req, res) {
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
        console.log('userid: ', req.cookies['userid']);
        if(!req.cookies['userid'] || req.cookies['userid'] == ""){
            resdata['data'] = "请登录";
            resdata['status'] = -1;
            res.send(resdata);
            res.end();
            return false;
        }

        // 业务开始
        categoryget(body).then(function (data){
            console.log(data);
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





/**
 *
 用于获取修改的文章分类信息
 *
 @method categorygetmod
 *
 @param { } 参数名 参数说明
 *
 *      {
            status:0=>'失败',1=>'成功',
            data:查询的category信息,
        }
*/

router.post('/categorygetmod', function (req, res) {
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
        if(!req.cookies['userid'] || req.cookies['userid'] == ""){
            resdata['data'] = "请登录";
            resdata['status'] = -1;
            res.send(resdata);
            res.end();
            return false;
        }

        // 业务开始
        categorygetmod(body).then(function (data){
            console.log(data);
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





/**
 *
 用于修改的文章分类信息
 *
 @method categorysetmod
 *
 @param { } 参数名 参数说明
 *
 *      {
            status:0=>'失败',1=>'成功',
            data:查询的category信息,
        }
*/

router.post('/categorysetmod', function (req, res) {
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
        if(!req.cookies['userid'] || req.cookies['userid'] == ""){
            resdata['data'] = "请登录";
            resdata['status'] = -1;
            res.send(resdata);
            res.end();
            return false;
        }

        // 业务开始
        categorysetmod(body).then(function (data){
            console.log(data);
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





/**
 *
 用于添加文章
 *
 @method articleadd
 *
 @param { } 参数名 参数说明
 *
 *      {
            status:0=>'失败',1=>'成功',
            data:查询的category信息,
        }
*/

router.post('/articleadd', function (req, res) {
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
        if(!req.cookies['userid'] || req.cookies['userid'] == ""){
            resdata['data'] = "请登录";
            resdata['status'] = -1;
            res.send(resdata);
            res.end();
            return false;
        }
        // 业务开始
        articleadd(body).then(function (data){
            console.log(data);
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




/**
 *
 用于获取修改的文章信息
 *
 @method articleget
 *
 @param { } 参数名 参数说明
 *
 *      {
            status:0=>'失败',1=>'成功',
            data:查询的category信息,
        }
*/

router.post('/articleget', function (req, res) {
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
        if(!req.cookies['userid'] || req.cookies['userid'] == ""){
            resdata['data'] = "请登录";
            resdata['status'] = -1;
            res.send(resdata);
            res.end();
            return false;
        }
        // 业务开始
        articleget(body).then(function (data){
            console.log(data);
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



/**
 *
 用于获取修改的文章信息
 *
 @method articlegetmod
 *
 @param { } 参数名 参数说明
 *
 *      {
            status:0=>'失败',1=>'成功',
            data:查询的category信息,
        }
*/

router.post('/articlegetmod', function (req, res) {
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
        if(!req.cookies['userid'] || req.cookies['userid'] == ""){
            resdata['data'] = "请登录";
            resdata['status'] = -1;
            res.send(resdata);
            res.end();
            return false;
        }

        // 业务开始
        articlegetmod(body).then(function (data){
            console.log(data);
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



/**
 *
 用于修改的文章信息
 *
 @method articlesetmod
 *
 @param { } 参数名 参数说明
 *
 *      {
            status:0=>'失败',1=>'成功',
            data:查询的category信息,
        }
*/

router.post('/articlesetmod', function (req, res) {
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
        if(!req.cookies['userid'] || req.cookies['userid'] == ""){
            resdata['data'] = "请登录";
            resdata['status'] = -1;
            res.send(resdata);
            res.end();
            return false;
        }

        // 业务开始
        articlesetmod(body).then(function (data){
            console.log(data);
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
































/**
 *
 用于上传文件
 *
 @method uploadfile
 *
 @param { } 参数名 参数说明
 *
 *      {
            status:0=>'失败',1=>'成功',
            data:查询的username信息,
        }
*/
router.post('/uploadfile', function (req, res, next) {
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
        // console.log("body:",body);
        if(!req.cookies['userid'] || req.cookies['userid'] == ""){
            resdata['data'] = "请登录";
            resdata['status'] = -1;
            res.send(resdata);
            res.end();
            return false;
        }

        var mydirname = __dirname.replace("\\routes","");
        var mydirname1 = mydirname.replace("\/routes","");
        var imgdirname = `${mydirname1}\/upload`;
        var base64Data = body.img.replace(/^data:image\/\w+;base64,/, "");
        var base64Data1 = base64Data.replace(/\s/g, "+");
        var dataBuffer = Buffer.from(base64Data1, 'base64');
        var date =  new Date();
        var filename = `${date.getFullYear()}${(date.getMonth()+1)}${date.getDate()}-${Date.now()}.${body.imgtype}`;

        console.log("文件名称:"+filename);
        console.log("文件路径:"+imgdirname);

        var filefinalname;
        if(process.env.NODE_ENV ==  'production'){
            filefinalname = `${imgdirname}\/${filename}`;
        }else{
            filefinalname = `${imgdirname}\\${filename}`;
        }
        fs.writeFile(`${filefinalname}`, dataBuffer , function(err) {
            if (err) {
                resdata['data'] = body;
                resdata['status'] = 0;
                res.send(resdata);
                res.end();
                return console.error(err);
            }
            resdata['data'] = filename;
            resdata['status'] = 1;
            res.send(resdata);
            res.end();
        });


        // 业务开始
        // categoryadd(body).then(function (data){
        //     console.log(data);
        //     if(data.length > 0){
        //         resdata['data'] = data;
        //         resdata['status'] = 1;
        //         res.send(resdata);
        //         res.end();
        //     }else{
        //         resdata['data'] = data;
        //         resdata['status'] = 0;
        //         res.send(resdata);
        //         res.end();
        //     }
        // },function (res){
        //     resdata['data'] = res;
        //     resdata['status'] = 0;
        //     res.send(resdata);
        //     res.end();
        // });
    });
})



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




/* GET users listing. */
// router.post('/test', function(req, res, next) {

//     var body = "";
//     req.on('data', function (chunk) {
//         body += chunk; 
//     });
//     req.on('end', function () {
//         body = querystring.parse(body);
//         console.log('__dirname: ', __dirname);
//         console.log('__filename: ', __filename);
//         console.log('process.cwd(): ', process.cwd());
//     });
// });

module.exports = router;
