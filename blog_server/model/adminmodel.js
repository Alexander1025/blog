// import * as configfile from './../config/config.js'
// import mysql from 'mysql'
var configfile = require("./config.js");
var mysql = require("mysql");

const config = configfile.config;

//=================

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

        var addSql = 'INSERT INTO category(name, status, `describe`) VALUES(?,?,?)';
        var addSqlParams = [option.name,  option.status, option.describe];
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


exports.categoryadd = categoryadd;
// export {havethisname,findname,savename,login}
