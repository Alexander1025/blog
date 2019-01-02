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


import admincommon from '@/views/admin/admincommon.vue';
import article_admin from '@/views/admin/article.vue';
import category_admin from '@/views/admin/category.vue';
import add_article_admin from '@/views/admin/articleadd.vue';
import add_category_admin from '@/views/admin/categoryadd.vue';


import logincommon from '@/views/login/logincommon.vue';
import login from '@/views/login/login.vue';
import register from '@/views/login/register.vue';


import NotFoundComponent from './../views/404/404.vue';


Vue.use(Router)

var router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: index
        },
        {
            path: '/article',
            component: article
        },
        {
            path: '/category',
            name: 'category',
            component: category
        },
        {
            path: '/login',
            component: logincommon,
            children: [
                { path: '', component: login },
                { path: 'register', component: register },
            ]
        },
        {
            path: '/admin',
            component: admincommon,
            children: [
                { path: '/', component: article_admin },
                { path: 'article', component: article_admin },
                { path: 'category', component: category_admin },
                { path: 'addarticle', component: add_article_admin },
                { path: 'addcategory', component: add_category_admin },
            ]
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
