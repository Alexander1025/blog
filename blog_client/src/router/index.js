import Vue from 'vue'
import Router from 'vue-router'

// 导入对应的vuex文件
// import store from './../store/store'

// 导入相应的子组件
// import Hello from './../components/Hello'
// import index from './../views/index/index.vue';
import index from '@/views/index/index.vue'



import NotFoundComponent from './../views/404/404.vue';


Vue.use(Router)

var router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: index
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
