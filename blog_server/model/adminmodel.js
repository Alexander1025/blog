// import * as configfile from './../config/config.js'
// import mysql from 'mysql'
var configfile = require("./config.js");
var mysql = require("mysql");

const config = configfile.config;

//=================

const categoryget = function (option){
    console.log(option);
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });

        connection.connect();

        var  sql = 'SELECT * FROM category';
        //查

        connection.query(sql,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                reject(err.message);
            }
            resolve(result);

        });

        connection.end();
    });

    return promise;
}




const categorygetmod = function (option){
    console.log(option);
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });

        connection.connect();


        var  sql = `SELECT * FROM category WHERE id = ${option.id}`;
        //查

        connection.query(sql,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                reject(err.message);
            }
            resolve(result);

        });

        connection.end();
    });

    return promise;
}






const categorysetmod = function (option){
    console.log(option);
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });

        connection.connect();

        var sql = "UPDATE category SET name = ?,status = ?,`describe` = ?,icon = ? WHERE Id = ?";
        var modSqlParams = [option.name, option.status, option.describe, option.icon, option.id];
        //改

        connection.query(sql,modSqlParams ,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                reject(err.message);
            }
            resolve(result);

        });

        connection.end();
    });

    return promise;
}





const categoryadd = function (option){
    console.log(option);
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });

        connection.connect();

        var addSql = 'INSERT INTO category(name, status, `describe`, icon) VALUES(?,?,?,?)';
        var addSqlParams = [option.name, option.status, option.describe, option.icon];
        //增

        connection.query(addSql,addSqlParams,function (err, result) {
            console.log(addSql);
            console.log(addSqlParams);
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                reject(err.message);
            }
            resolve(result);

        });

        connection.end();
    });

    return promise;
}



const articleadd = function (option){
    console.log(option);
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });

        connection.connect();

        var addSql = 'INSERT INTO article(title, `describe`, category_id, creat_time, `author`, authorid, status, img, flow, `content`, place) VALUES(?,?,?,?,?,?,?,?,?,?,?)';
        var addSqlParams = [option.title, option.describe, option.category_id, option.creat_time, option.author, option.authorid, option.status, option.img, option.flow, option.content, option.place];
        //增

        connection.query(addSql,addSqlParams,function (err, result) {
            // console.log(addSql);
            // console.log(addSqlParams);
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                reject(err.message);
            }
            resolve(result);

        });

        connection.end();
    });

    return promise;
}


const articleget = function (option){
    console.log(option);
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });

        connection.connect();

        var  sql = 'SELECT * FROM article';
        //查

        connection.query(sql,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                reject(err.message);
            }
            resolve(result);

        });

        connection.end();
    });

    return promise;
}







const articlegetmod = function (option){
    console.log(option);
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });

        connection.connect();


        var  sql = `SELECT * FROM article WHERE id = ${option.id}`;
        //查

        connection.query(sql,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                reject(err.message);
            }
            resolve(result);

        });

        connection.end();
    });

    return promise;
}







const articlesetmod = function (option){
    console.log(option);
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });

        connection.connect();


        // title, `describe`, category_id, creat_time, `author`, authorid, status, img, flow
        var sql = "UPDATE article SET title = ?,`describe` = ?,category_id = ?,creat_time = ?,author = ?,authorid = ?,status = ?,img = ?,flow = ?,content = ?, place = ? WHERE Id = ?";
        var modSqlParams = [option.title, option.describe, option.category_id, option.creat_time, option.author, option.authorid, option.status, option.img, option.flow, option.content, option.place, option.id];
        //改

        connection.query(sql,modSqlParams ,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                reject(err.message);
            }
            resolve(result);

        });

        connection.end();
    });

    return promise;
}




const verification = function (userid, password){
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });

        connection.connect();


        var  sql = `SELECT * FROM user WHERE userid = ${userid}`;
        //查

        connection.query(sql,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                reject(err.message);
            }
            if(password == result[0].password){
                resolve();
            }else{
                reject();
            }


        });

        connection.end();
    });

    return promise;
}

// const categoryadd = function (username){
//     const promise = new Promise(function(resolve, reject){
//         var connection = mysql.createConnection({
//             host     : config.host,
//             user     : config.user,
//             password : config.password,
//             port: config.port,
//             database: config.database,
//         });
//         connection.connect();

//         var sql = `SELECT * FROM category`;

//         connection.query(sql,function (err, result) {
//             if(err){
//                 console.log('[SELECT ERROR] - ',err.message);
//                 reject(err.message);
//             }
//             resolve(result);
//         });
//         connection.end();
//     });

//     return promise;
// }


// 文章分类操作
exports.categoryadd = categoryadd;
exports.categoryget = categoryget;
exports.categorygetmod = categorygetmod;
exports.categorysetmod = categorysetmod;


// 文章操作
exports.articleadd = articleadd;
exports.articleget = articleget;
exports.articlegetmod = articlegetmod;
exports.articlesetmod = articlesetmod;


// 用于验证登陆
exports.verification = verification;

// export {havethisname,findname,savename,login}
