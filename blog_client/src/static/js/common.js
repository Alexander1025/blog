const trim = function (...arg){
    var arr = [];
    for(var i = 0 ; i <= arg.length-1 ; i++){
        console.log(arg[i]);
        arr.push(arg[i].replace(/(^\s*)|(\s*$)/g, ""));
    }
    return arr;
}
const myparse = function (data){
    var obj = JSON.parse(data);
    return obj;
}

export {trim,myparse}
