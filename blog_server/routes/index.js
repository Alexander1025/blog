var express = require('express');
var router = express.Router();
var querystring = require("querystring");

var indexmodel = require("./../model/indexmodel.js");

// 文章分类获取
var categorylistget = indexmodel.categorylistget;
// 首页头部获取
var indextoplistget = indexmodel.indextoplistget;
// 中部文章获取
var articlemodule = indexmodel.articlemodule;
// 分类页文章获取
// var articlecategoryget = indexmodel.articlecategoryget;
// 用于获取文章详情信息
var articleget = indexmodel.articleget;
// 用于文章浏览量计数器
var count = indexmodel.count;
var addcount = indexmodel.addcount;




/**
 *
 用于获取文章列表
 *
 @method indextoplistget
 *
 @param { } 参数名 参数说明
 *
 *      {
            status:0=>'失败',1=>'成功',
            data:查询的category信息,
        }
*/

router.post('/indextoplistget', function(req, res, next) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        // console.log("chunk:",chunk);
    });
    req.on('end', function () {
        // 生成返回格式对象
        let resdata = {};
        resdata['data'] = {};
        // 解析参数
        body = querystring.parse(body);  //将一个字符串反序列化为一个对象
        // console.log("body:",body);


        // 业务开始
        indextoplistget(body).then(function (data){
            // console.log(data);
            var featured = [];
            var recommend = [];
            for(var i in data){
                if(data[i].place == 1){
                    var newObj = {};
                    newObj['id'] = data[i]['id'];
                    newObj['tag'] = data[i]['category_id'];
                    newObj['title'] = data[i]['title'];
                    newObj['desc'] = data[i]['describe'];
                    newObj['author'] = data[i]['author'];
                    newObj['date'] = data[i]['creat_time'];
                    newObj['quantity'] = data[i]['flow'];
                    // newObj['img'] = `./../static/images/upload/${data[i]['img']}`;
                    newObj['img'] = `/blog_server/myupload/${data[i]['img']}`;
                    newObj['color'] = "white";
                    featured.push(newObj);
                }
                if(data[i].place == 2){
                    var newObj = {};
                    newObj['id'] = data[i]['id'];
                    newObj['tag'] = data[i]['category_id'];
                    newObj['title'] = data[i]['title'];
                    newObj['desc'] = data[i]['describe'];
                    newObj['author'] = data[i]['author'];
                    newObj['date'] = data[i]['creat_time'];
                    newObj['quantity'] = data[i]['flow'];
                    newObj['img'] = `/blog_server/myupload/${data[i]['img']}`;
                    newObj['color'] = "white";
                    recommend.push(newObj);
                }
            }
            resdata['data']['featured'] = featured;
            resdata['data']['recommend'] = recommend;
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
 用于获取文章分类列表
 *
 @method categorylistget
 *
 @param { } 参数名 参数说明
 *
 *      {
            status:0=>'失败',1=>'成功',
            data:查询的category信息,
        }
*/
router.post('/categorylistget', function(req, res, next) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        // console.log("chunk:",chunk);
    });
    req.on('end', function () {
        // 生成返回格式对象
        let resdata = {};
        resdata['data'] = {};
        // 解析参数
        body = querystring.parse(body);  //将一个字符串反序列化为一个对象
        // console.log("body:",body);


        // 业务开始
        categorylistget(body).then(function (data){
            // console.log(data);
            resdata['data']['category'] = data;
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
 用于获取文章分类列表
 *
 @method articlemodule
 *
 @param { } 参数名 参数说明
 *
 *      {
            status:0=>'失败',1=>'成功',
            data:查询的category信息,
        }
*/
router.post('/articlemodule', function(req, res, next) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        // console.log("chunk:",chunk);
    });
    req.on('end', function () {
        // 生成返回格式对象
        let resdata = {};
        resdata['data'] = {};
        // 解析参数
        body = querystring.parse(body);  //将一个字符串反序列化为一个对象
        // console.log("body:",body);


        // 业务开始
        categorylistget(body).then(function (data){
            // console.log(data);
            var categoryidarr = [];
            for(var i = 0 ; i <= data.length-1 ; i++){
                categoryidarr.push(data[i].id);
            }
            // console.log(categoryidarr);
            articlemodule(categoryidarr).then(function (data1){
                console.log(data1);
                var articlemodule = [];
                for(var o = 0 ; o <= data.length-1 ; o++){
                    var newObj = {};
                    newObj['title'] = data[o]['name'];
                    newObj['category'] = data[o]['id'];
                    newObj['article'] = [];
                    for(var j = 0 ; j <= data1.length-1 ; j++){
                        if(data[o]['id'] == data1[j]['category_id']){
                            var newObj1 = {};
                            newObj1['id'] = data1[j]['id'];
                            newObj1['tag'] = data1[j]['category_id'];
                            newObj1['title'] = data1[j]['title'];
                            newObj1['desc'] = data1[j]['describe'];
                            newObj1['author'] = data1[j]['author'];
                            newObj1['date'] = data1[j]['creat_time'];
                            newObj1['quantity'] = data1[j]['flow'];
                            newObj1['img'] = `/blog_server/myupload/${data1[j]['img']}`;
                            newObj1['color'] = "gray";
                            newObj['article'].push(newObj1);
                        }
                    }
                    articlemodule.push(newObj);
                }

                resdata['data']['article'] = articlemodule;
                resdata['status'] = 1;
                res.send(resdata);
                res.end();
            },function (res){
                resdata['data'] = res;
                resdata['status'] = 0;
                res.send(resdata);
                res.end();
            });
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
 用于获取分类页文章列表
 *
 @method articlecategoryget
 *
 @param { } 参数名 参数说明
 *
 *      {
            status:0=>'失败',1=>'成功',
            data:查询的category信息,
        }
*/

router.post('/articlecategoryget', function(req, res, next) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        // console.log("chunk:",chunk);
    });
    req.on('end', function () {
        // 生成返回格式对象
        let resdata = {};
        resdata['data'] = {};
        // 解析参数
        body = querystring.parse(body);  //将一个字符串反序列化为一个对象
        // console.log("body:",body);


        // 业务开始
        categorylistget(body).then(function (data){
            // console.log(data);
            var categoryidarr = [];
            for(var i = 0 ; i <= data.length-1 ; i++){
                categoryidarr.push(data[i].id);
            }
            console.log(categoryidarr);
            articlemodule(categoryidarr).then(function (data1){
                console.log(data1);
                var articlecategorymodule = [];
                for(var o = 0 ; o <= data.length-1 ; o++){
                    if(body['categoryid'] == data[o]['id']){
                        var newObj = {};
                        newObj['title'] = data[o]['name'];
                        newObj['category'] = data[o]['id'];
                        newObj['article'] = [];
                        for(var j = 0 ; j <= data1.length-1 ; j++){
                            if(data[o]['id'] == data1[j]['category_id']){
                                var newObj1 = {};
                                newObj1['id'] = data1[j]['id'];
                                newObj1['tag'] = data1[j]['category_id'];
                                newObj1['title'] = data1[j]['title'];
                                newObj1['desc'] = data1[j]['describe'];
                                newObj1['author'] = data1[j]['author'];
                                newObj1['date'] = data1[j]['creat_time'];
                                newObj1['quantity'] = data1[j]['flow'];
                                newObj1['img'] = `/blog_server/myupload/${data1[j]['img']}`;
                                newObj1['color'] = "gray";
                                newObj['article'].push(newObj1);
                            }
                        }
                        articlecategorymodule.push(newObj);
                    }
                }

                resdata['data']['articlecategorymodule'] = articlecategorymodule;
                resdata['status'] = 1;
                res.send(resdata);
                res.end();
            },function (res){
                resdata['data'] = res;
                resdata['status'] = 0;
                res.send(resdata);
                res.end();
            });
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
 用于获取文章详情信息
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
        // console.log("body:",body);

        // 业务开始
        articleget(body).then(function (data){
            // console.log(data);
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
 用于文章浏览量计数器
 *
 @method count
 *
 @param { } 参数名 参数说明
 *
 *      {
            status:0=>'失败',1=>'成功',
            data:查询的category信息,
        }
*/

router.post('/count', function (req, res) {
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

        // 业务开始
        count(body).then(function (data){
            addcount(data[0].flow, data[0].id).then(function (data1){
                resdata['data'] = parseInt(data[0].flow)+1;
                resdata['status'] = 1;
                res.send(resdata);
                res.end();
            },function (res){
                resdata['data'] = res;
                resdata['status'] = 0;
                res.send(resdata);
                res.end();
            });
        },function (res){
            resdata['data'] = res;
            resdata['status'] = 0;
            res.send(resdata);
            res.end();
        });

    });
});





module.exports = router;
