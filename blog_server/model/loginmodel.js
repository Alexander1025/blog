// import * as configfile from './../config/config.js'
// import mysql from 'mysql'
var configfile = require("./config.js");
var mysql = require("mysql");

const config = configfile.config;


const test = function (username){
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });
        connection.connect();

        var sql = `SELECT * FROM user WHERE username='${username}'`;

        connection.query(sql,function (err, result) {
            if(err){
                console.log('[SELECT ERROR] - ',err.message);
                reject(err.message);
            }
            resolve(result);
        });
        connection.end();
    });

    return promise;
}

//=================

// const havethisname = function (username){
//     const promise = new Promise(function(resolve, reject){
//         var connection = mysql.createConnection({
//             host     : config.host,
//             user     : config.user,
//             password : config.password,
//             port: config.port,
//             database: config.database,
//         });
//         connection.connect();

//         var sql = `SELECT * FROM user WHERE username='${username}'`;

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

// const savename = function (option){
//     console.log(option);
//     const promise = new Promise(function(resolve, reject){
//         var connection = mysql.createConnection({
//             host     : config.host,
//             user     : config.user,
//             password : config.password,
//             port: config.port,
//             database: config.database,
//         });

//         connection.connect();

//         var addSql = 'INSERT INTO user(username,password) VALUES(?,?)';
//         var addSqlParams = [option.username, option.password];
//         //增

//         connection.query(addSql,addSqlParams,function (err, result) {
//             if(err){
//                 console.log('[INSERT ERROR] - ',err.message);
//                 reject(err.message);
//             }
//             resolve(result);

//         });

//         connection.end();
//     });

//     return promise;

// }


// const login = function (option){
//     console.log(option);
//     const promise = new Promise(function(resolve, reject){
//         var connection = mysql.createConnection({
//             host     : config.host,
//             user     : config.user,
//             password : config.password,
//             port: config.port,
//             database: config.database,
//         });

//         connection.connect();

//         var addSql = `SELECT * FROM user WHERE username='${option.username}' AND password='${option.password}'`;

//         connection.query(addSql,function (err, result) {
//             if(err){
//                 console.log('[INSERT ERROR] - ',err.message);
//                 reject(err.message);
//             }
//             resolve(result);

//         });

//         connection.end();
//     });

//     return promise;

// }

// exports.havethisname = havethisname;
// exports.findname = findname;
// exports.savename = savename;
// exports.login = login;
exports.test = test;
// export {havethisname,findname,savename,login}
