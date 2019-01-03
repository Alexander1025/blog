var configfile = require("./config.js");
var mysql = require("mysql");

const config = configfile.config;



const categorylistget = function (){
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });
        connection.connect();

        var sql = `SELECT * FROM category WHERE status = '1'`;

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





const indextoplistget = function (){
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });
        connection.connect();

        var sql = `SELECT * FROM article WHERE place = '1' AND status = '1' OR place = '2' AND status = '1'`;

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


const articlemodule = function (categoryid){
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });
        connection.connect();

        var condition = "";
        for(var i = 0 ; i <= categoryid.length-1 ; i++){
            condition = condition + `category_id = '${categoryid[i]}' AND status = '1'`;
            if(i != categoryid.length-1){
                condition = condition + ` OR `;
            }
        }
        // `category_id = ${categoryid}`
        var sql = `SELECT * FROM article WHERE ${condition}`;

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



exports.categorylistget = categorylistget;
exports.indextoplistget = indextoplistget;
exports.articlemodule = articlemodule;
exports.articleget = articleget;


