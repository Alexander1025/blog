<template>
    <div class="adminwrap">
        <div class="admintop">
            <a href="/">
                <img class="logoimg" src="./../../static/images/common/logo.png" alt="机智僧">
            </a>
            <span>机智僧博客后台</span>
            <div class="logout" @click="logout()">
                登出
            </div>
        </div>
        <div class="adminmain">
            <div class="adminmenu">
                <ul>
                    <li
                        v-for="(item, index) in activelist"
                        :class="[item.isactive? 'active': '']"
                        @click="lihref(item.href,index)"
                    >
                        {{item.text}}
                    </li>
                </ul>
            </div>
            <div class="admincompile">
                <router-view
                    :getindex="getindex"
                ></router-view>
            </div>
        </div>

    </div>
</template>

<script>
import {trim,myparse} from './../../static/js/common.js';
import router from './../../router';
import '@/static/css/admin.css';

export default {
    data () {
        return {
            activelist:[
                {
                    'href': "/admin/article",
                    'text': "文章",
                    'isactive': true,
                },
                {
                    'href': "/admin/addarticle",
                    'text': "添加文章",
                    'isactive': false,
                },
                {
                    'href': "/admin/category",
                    'text': "文章分类",
                    'isactive': false,
                },
                {
                    'href': "/admin/addcategory",
                    'text': "添加文章分类",
                    'isactive': false,
                },
            ]
        }
    },
    components:{

    },
    mounted: function (){
        this.getindex();
    },
    methods:{
        lihref: function (href,index){
            for(var i in this.activelist){
                this.activelist[i].isactive = false;
            }
            this.activelist[index].isactive = true;
            router.push({ path: href });
        },
        getindex: function (){

            for(var i = 0 ; i <= this.activelist.length-1 ; i++){
                this.activelist[i].isactive = false;
                if(location.href.includes(this.activelist[i].href)){
                    this.activelist[i].isactive = true;
                }
            }
            if(/\/admin$/.test(location.href)){
                this.activelist[0].isactive = true;
            }

        },
        logout:function (){

            var that = this;
            var ajaxargument = "";
            var ajax = new XMLHttpRequest();
            ajax.open('post','/node/login/logout');
            ajax.send(ajaxargument);
            ajax.onreadystatechange = function () {
                if (ajax.readyState==4 &&ajax.status==200) {
                    var data = ajax.responseText;
                    data = myparse(data);
                    // console.log(data);//输入相应的内容
                    if(data.status == 1){
                        layer.open({
                            content: `登出成功`,
                            skin: 'msg',
                            time: 2,
                        });
                        var time = setTimeout(()=>{
                            that.$router.push({path: '/'});
                        },2000);
                    }else{
                        layer.open({
                            content: `登出失败`,
                            skin: 'msg',
                            time: 2,
                        });
                    }
                }
            }

        }
    }
}
</script>

<style>

</style>
