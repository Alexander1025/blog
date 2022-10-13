var config;
if(process.env.NODE_ENV ==  'production'){
    config = {
        host     : '127.0.0.1',
        user     : 'root',
        password : 'a456852456.',   //记得最后有点！！！
        port     : '3306',
        database : 'blog',
    }
}else{
    config = {
        host     : '1.12.227.206',
        user     : 'root',
        password : 'a456852456.',
        port     : '3306',
        database : 'blog',
    }
}


// test

// const config = {
//     host     : host,
//     user     : user,
//     password : password,
//     port: port,
//     database: database,
// }

exports.config = config;
// export {
//     config
// }