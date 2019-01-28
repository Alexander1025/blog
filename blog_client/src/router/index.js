import Vue from 'vue'
import Router from 'vue-router'

// 导入对应的vuex文件
// import store from './../store/store'

// 导入相应的子组件
// import Hello from './../components/Hello'
// import index from './../views/index/index.vue';
import index from '@/views/index/index.vue';


import article from '@/views/index/article.vue';
import category from '@/views/index/category.vue';


// import admincommon from '@/views/admin/admincommon.vue';
// import article_admin from '@/views/admin/article.vue';
// import category_admin from '@/views/admin/category.vue';
// import add_article_admin from '@/views/admin/articleadd.vue';
// import add_category_admin from '@/views/admin/categoryadd.vue';


// import logincommon from '@/views/login/logincommon.vue';
// import login from '@/views/login/login.vue';
// import register from '@/views/login/register.vue';


import NotFoundComponent from './../views/404/404.vue';

import {trim,myparse} from './../static/js/common.js';

Vue.use(Router)

function loadView(view) {
    // return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
    return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)

}

var router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: index,
            // component: loadView('index/index'),
        },
        {
            path: '/article',
            component: article,
            // component: loadView('index/article'),
        },
        {
            path: '/category',
            name: 'category',
            component: category,
            // component: loadView('index/category'),
        },
        {
            path: '/login',
            // component: logincommon,
            component: loadView('login/logincommon'),
            children: [
                {
                    path: '',
                    // component: login ,
                    component: loadView('login/login'),
                },
                {
                    path: 'register',
                    // component: register ,
                    component: loadView('login/register'),
                },
            ]
        },
        {
            path: '/admin',
            // component: admincommon,
            component: loadView('admin/admincommon'),
            children: [
                {
                    path: '/',
                    // component: article_admin ,
                    component: loadView('admin/article'),
                },
                {
                    path: 'article',
                    // component: article_admin ,
                    component: loadView('admin/article'),
                },
                {
                    path: 'category',
                    // component: category_admin ,
                    component: loadView('admin/category'),
                },
                {
                    path: 'addarticle',
                    // component: add_article_admin ,
                    component: loadView('admin/articleadd'),
                },
                {
                    path: 'addcategory',
                    // component: add_category_admin ,
                    component: loadView('admin/categoryadd'),
                },
            ],
            beforeEnter: function (to, from, next){
                var that = this;
                var ajaxargument = "";

                var ajax = new XMLHttpRequest();
                ajax.open('post','/node/admin/articleget');
                ajax.send(ajaxargument);
                ajax.onreadystatechange = function () {
                    if (ajax.readyState==4 &&ajax.status==200) {
                        var data = ajax.responseText;
                        data = myparse(data);
                        // console.log(data);//输入相应的内容
                        if(data.status == 1){
                            next();
                        }else if(data.status == -1){
                            layer.open({
                                content: `${data.data}`,
                                skin: 'msg',
                                time: 2,
                            });
                            next('/login');
                        }else if(data.status == -2){
                            layer.open({
                                content: `${data.data}`,
                                skin: 'msg',
                                time: 2,
                            });
                            next('/login');
                        }else{
                            next('/');
                        }
                    }
                }
            }
        },
        // {
        //     path: '/login',
        //     component: logincommon,
        //     children: [
        //         { path: '', component: login },
        //         { path: 'register', component: register },
        //     ]
        // },
        // {
        //     path: '/task',
        //     component: task,
        //     children: [
        //         { path: '', component: task },
        //         { path: 'index', component: task },
        //     ]
        // },
        // {
        //     path: '/setting',
        //     component: settingcommon,
        //     children: [
        //         { path: '', component: setting },
        //         { path: 'index', component: setting },
        //         { path: 'theme', component: theme },
        //         { path: 'addtheme', component: addtheme }
        //     ]
        // },






        // {
        //     path: '/test',
        //     component: test
        // },

        { path: '*', component: NotFoundComponent }

        // { name: 'hello', path: '/hello', component: Hello }
    ]
})

export default router
