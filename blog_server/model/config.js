var config;
if(process.env.NODE_ENV ==  'production'){
    config = {
        host     : '127.0.0.1',
        user     : 'root',
        password : '061b0a84afeb2b00.',   //记得最后有点！！！
        port     : '3306',
        database : 'blog',
    }
}else{
    config = {
        host     : '127.0.0.1',
        user     : 'root',
        password : 'rootpass123456',
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
