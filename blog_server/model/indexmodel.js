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

        var sql = `SELECT * FROM category WHERE status = '1' AND categoryid < 50`;

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

        var sql = `SELECT * FROM article WHERE place != '0' AND status = '1'`;

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






const count = function (option){
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


        var  sql = `SELECT flow,id FROM article WHERE id = ${option.id}`;
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




const submitcomment = function (option,userid){
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

        var addSql = 'INSERT INTO comment(articleid,author,cont,email,createtime,status) VALUES(?,?,?,?,?,?)';
        var addSqlParams = [option.articleid, option.author,option.cont, option.email,option.createtime, 1];
        //增

        connection.query(addSql,addSqlParams,function (err, result) {
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


const getcomment = function (option){
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


        var  sql = `SELECT * FROM comment WHERE articleid = ${option.articleid}`;
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





const addcount = function (flow, id){
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });

        connection.connect();


        var sql = "UPDATE article SET flow = ? WHERE Id = ?";
        var modSqlParams = [parseInt(flow)+1, id];


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


exports.categorylistget = categorylistget;
exports.indextoplistget = indextoplistget;
exports.articlemodule = articlemodule;
exports.articleget = articleget;
exports.count = count;
exports.addcount = addcount;
exports.submitcomment = submitcomment;
exports.getcomment = getcomment;



