import Vue from 'vue'
import Vuex from 'vuex'
import {trim,myparse} from './../static/js/common.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        test:"test",
        datemonth: "",
        username: "hi",
        islogin:false,
        footerindex:1,
        theme:[0,"",""], //主题, (0-背景颜色, 1-图片), 头部样式， 主体样式
        setnowdate:new Date(), //设置时间不设置默认当前时间 ，new Date().getTime()+86400000*10
    },
    mutations: {
        getMonth:function (store,mon){
            let monarr = ['一','二','三','四','五','六','七','八','九','十','十一','十二',];
            store.datemonth = monarr[mon];
        },
        setState:function (store,option){
            store[option.attr] = option.field;
        },
    },
    actions: {
        getUserMsg (store,mon) {

            var that = this;
            var ajax = new XMLHttpRequest();
            ajax.open('post','/node/getuser');
            ajax.send();
            ajax.onreadystatechange = function () {
                if (ajax.readyState==4 &&ajax.status==200) {
                    var data = ajax.responseText;
                    data = myparse(data);
                    // console.log(data);//输入相应的内容
                    if(data.status == 1){
                        store.commit('setState',{attr:'username',field:data.data[0].username});
                        store.commit('setState',{attr:'islogin',field:true});
                        // console.log(data.data[0].theme);
                        if(data.data[0].theme){
                            let themeArr = data.data[0].theme.split(",");
                            store.commit('setState',{attr:'theme',field:[themeArr[0],themeArr[1],themeArr.slice(2).join(",")]});
                        }
                    }else if(data.status == 0){
                        store.commit('setState',{attr:'username',field:'请登录'});
                        store.commit('setState',{attr:'islogin',field:false});
                    }
                }
            }
        },
        logout (store){
            var that = this;
            var ajax = new XMLHttpRequest();
            ajax.open('post','/node/logout');
            ajax.send();
            ajax.onreadystatechange = function () {
                if (ajax.readyState==4 &&ajax.status==200) {
                    var data = ajax.responseText;
                    data = myparse(data);
                    // console.log(data);//输入相应的内容
                    if(data.status == 1){
                        layer.open({
                            content: "已安全登出",
                            skin: 'msg',
                            time: 2,
                        });
                        store.commit('setState',{attr:'username',field:'请登录'});
                        store.commit('setState',{attr:'islogin',field:false});
                        store.commit('setState',{attr:'theme',field:[0,"",""]});
                    }
                }
            }

        }
    }
})

export default store
