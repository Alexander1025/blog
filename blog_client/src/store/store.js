import Vue from 'vue'
import Vuex from 'vuex'
import {trim,myparse} from './../static/js/common.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // test:"test",
        // datemonth: "",
        // username: "hi",
        // islogin:false,
        // footerindex:1,
        // theme:[0,"",""], //主题, (0-背景颜色, 1-图片), 头部样式， 主体样式
        // setnowdate:new Date(), //设置时间不设置默认当前时间 ，new Date().getTime()+86400000*10
        headtagarr: [
            {
                isactive: true,
                cont: "首页",
                url: "/",
                newPage:false,
                fullurl:false,
            },
            {
                isactive: false,
                cont: "前端",
                url: "/category?categoryid=1",
                newPage:false,
                fullurl:false,
            },
            {
                isactive: false,
                cont: "JS小册",
                url: "/category?categoryid=3",
                newPage:false,
                fullurl:false,
            },
            {
                isactive: false,
                cont: "应用",
                url: "http://todo.zhoujizhi.com/",
                newPage:true,
                fullurl:true,
            },
            // {
            //     isactive: false,
            //     cont: "标签",
            //     url: "/",
            // },
            // {
            //     isactive: false,
            //     cont: "杂谈",
            //     url: "/",
            // },
            // {
            //     isactive: false,
            //     cont: "留言",
            //     url: "/",
            // },
            // {
            //     isactive: false,
            //     cont: "音乐",
            //     url: "/",
            // },
            // {
            //     isactive: false,
            //     cont: "关于",
            //     url: "/",
            // },
            {
                isactive: false,
                cont: "后台管理",
                url: "/admin"
            },
            // {
            //     isactive: false,
            //     cont: this.$store.state.test
            // }
        ],
        featured:[
            // {
            //     'id':"1",
            //     'tag':"10",
            //     'title':"欢迎来到机智僧的博客",
            //     'desc':"这里是机智僧的博客,欢迎大家常来博客打卡 ^_^",
            //     'author':"机智僧",
            //     'date':"2018-10-1",
            //     'quantity':"168",
            //     'img':"./../static/images/upload/indextop.jpg",
            //     'color':"white",
            // }
        ],
        recommend:[
            // {
            //     'id':"2",
            //     'tag':"10",
            //     'title':"欢迎来到机智僧的博客",
            //     'desc':"这里是机智僧的博客,欢迎大家常来博客打卡 ^_^",
            //     'author':"机智僧",
            //     'date':"2018-10-1",
            //     'quantity':"168",
            //     'img':"./../static/images/upload/indextop.jpg",
            //     'color':"white",
            // },
            // {
            //     'id':"3",
            //     'tag':"10",
            //     'title':"欢迎来到机智僧的博客",
            //     'desc':"这里是机智僧的博客,欢迎大家常来博客打卡 ^_^",
            //     'author':"机智僧",
            //     'date':"2018-10-1",
            //     'quantity':"168",
            //     'img':"./../static/images/upload/indextop.jpg",
            //     'color':"white",
            // },
            // {
            //     'id':"4",
            //     'tag':"10",
            //     'title':"欢迎来到机智僧的博客",
            //     'desc':"这里是机智僧的博客,欢迎大家常来博客打卡 ^_^",
            //     'author':"机智僧",
            //     'date':"2018-10-1",
            //     'quantity':"168",
            //     'img':"./../static/images/upload/indextop.jpg",
            //     'color':"white",
            // },
        ],
        articlemodule:[
            // {
            //     title:"推荐文章",
            //     category:"",
            //     article:[
            //         {
            //             'id':"2",
            //             'tag':"10",
            //             'title':"欢迎来到机智僧的博客",
            //             'desc':"这里是机智僧的博客,欢迎大家常来博客打卡 ^_^",
            //             'author':"机智僧",
            //             'date':"2018-10-1",
            //             'quantity':"168",
            //             'img':"./../static/images/upload/indextop.jpg",
            //             'color':"gray",
            //         },
            //         {
            //             'id':"3",
            //             'tag':"10",
            //             'title':"欢迎来到机智僧的博客",
            //             'desc':"这里是机智僧的博客,欢迎大家常来博客打卡 ^_^",
            //             'author':"机智僧",
            //             'date':"2018-10-1",
            //             'quantity':"168",
            //             'img':"./../static/images/upload/indextop.jpg",
            //             'color':"gray",
            //         },
            //         {
            //             'id':"4",
            //             'tag':"10",
            //             'title':"欢迎来到机智僧的博客",
            //             'desc':"这里是机智僧的博客,欢迎大家常来博客打卡 ^_^",
            //             'author':"机智僧",
            //             'date':"2018-10-1",
            //             'quantity':"168",
            //             'img':"./../static/images/upload/indextop.jpg",
            //             'color':"gray",
            //         },
            //     ],
            // },
            // {
            //     title:"JAVASCRIPT",
            //     category:1,
            //     article:[
            //         {
            //             'id':"2",
            //             'tag':"10",
            //             'title':"欢迎来到机智僧的博客",
            //             'desc':"这里是机智僧的博客,欢迎大家常来博客打卡 ^_^",
            //             'author':"机智僧",
            //             'date':"2018-10-1",
            //             'quantity':"168",
            //             'img':"./../static/images/upload/indextop.jpg",
            //             'color':"gray",
            //         },
            //         {
            //             'id':"3",
            //             'tag':"10",
            //             'title':"欢迎来到机智僧的博客",
            //             'desc':"这里是机智僧的博客,欢迎大家常来博客打卡 ^_^",
            //             'author':"机智僧",
            //             'date':"2018-10-1",
            //             'quantity':"168",
            //             'img':"./../static/images/upload/indextop.jpg",
            //             'color':"gray",
            //         },
            //         {
            //             'id':"4",
            //             'tag':"10",
            //             'title':"欢迎来到机智僧的博客",
            //             'desc':"这里是机智僧的博客,欢迎大家常来博客打卡 ^_^",
            //             'author':"机智僧",
            //             'date':"2018-10-1",
            //             'quantity':"168",
            //             'img':"./../static/images/upload/indextop.jpg",
            //             'color':"gray",
            //         },
            //     ],
            // }
        ],
        articlecategorymodule:[
            // {
            //     title:"JAVASCRIPT",
            //     category:1,
            //     article:[
            //         {
            //             'id':"2",
            //             'tag':"10",
            //             'title':"欢迎来到机智僧的博客",
            //             'desc':"这里是机智僧的博客,欢迎大家常来博客打卡 ^_^",
            //             'author':"机智僧",
            //             'date':"2018-10-1",
            //             'quantity':"168",
            //             'img':"./../static/images/upload/indextop.jpg",
            //             'color':"gray",
            //         },
            //         {
            //             'id':"3",
            //             'tag':"10",
            //             'title':"欢迎来到机智僧的博客",
            //             'desc':"这里是机智僧的博客,欢迎大家常来博客打卡 ^_^",
            //             'author':"机智僧",
            //             'date':"2018-10-1",
            //             'quantity':"168",
            //             'img':"./../static/images/upload/indextop.jpg",
            //             'color':"gray",
            //         },
            //         {
            //             'id':"4",
            //             'tag':"10",
            //             'title':"欢迎来到机智僧的博客",
            //             'desc':"这里是机智僧的博客,欢迎大家常来博客打卡 ^_^",
            //             'author':"机智僧",
            //             'date':"2018-10-1",
            //             'quantity':"168",
            //             'img':"./../static/images/upload/indextop.jpg",
            //             'color':"gray",
            //         },
            //     ],
            // }
        ],
        categorylistarr:[
            // {
            //     "id":1,
            //     "describe":"前端文章",
            //     "name":"前端",
            //     "status":1,
            //     "icon":"20181227-1545892641180.png"
            // },
            // {
            //     "id":1,
            //     "describe":"前端文章",
            //     "name":"前端",
            //     "status":1,
            //     "icon":"20181227-1545892641180.png"
            // }
        ],
    },
    mutations: {
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
