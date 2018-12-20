<template>
    <div class="centerwrap">

        <div class="usernamewrap">
            <input
                class="logininput logininputregister"
                type="text"
                placeholder="账号"

                v-focus
                :class="[succeed?'logininputsucceed':'',failure?'logininputfailure':'']"
                v-model="username"
            >
            <div v-show="showusernamestatus" :class="[succeed?'succeed':'failure']"></div>
        </div>
        <div class="passwordwrap">
            <input
                class="logininput logininputregister locationmiddle"
                placeholder="密码"

                :type="passwordtype"
                v-model="password"
                @keyup="keyup"
            >
            <div :class="[showpassword?'showpassword':'notshowpassword']" @click="togglepassword();"></div>
        </div>

        <a @click="savename" class="loginbtn loginbtnregister" href="javascript:void(0);">注册</a>
        <div class="logingray logingrayregister verticalbetween">
            <a href="javascript:void(0);"></a>
            <router-link to="/login">
                <a href="javascript:void(0);">密码登录</a>
            </router-link>
        </div>
    </div>
</template>

<script>
import {trim,myparse} from './../../static/js/common.js';

export default {
    data () {
        return {
            username:"",
            password:"",

            // 是否显示username状态，默认不显示
            showusernamestatus:false,
            // 可以注册
            succeed:false,
            // 不可以注册，已有相同用户名
            failure:false,
            // 是否显示密码，默认不显示
            showpassword:false,

            // 是否在请求，用于username()的请求节流
            isgetname:false,
            timeout:'',
            passwordtype:'password',
        }
    },
    watch:{
        username:function (){
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() =>{
                this.getusername();
            }, 500);
        }
    },
    methods:{
        getusername:function (){

            // var that = this;
            // var ajaxargument = "";
            // ajaxargument = `username=${this.username}`;

            // // console.log(ajaxargument);

            // var ajax = new XMLHttpRequest();
            // ajax.open('post','/node/haveUserName');
            // ajax.send(ajaxargument);
            // ajax.onreadystatechange = function () {
            //     if (ajax.readyState==4 &&ajax.status==200) {
            //         var data = ajax.responseText;
            //         data = myparse(data);
            //         console.log(data);//输入相应的内容
            //         if(data.status == 1){
            //             console.log(data.data.length);
            //             if(that.username.length >= 1){
            //                 that.showusernamestatus = true;
            //                 if(data.data.length == 0){
            //                     that.succeed = true;
            //                     that.failure = false;
            //                 }else{
            //                     that.succeed = false;
            //                     that.failure = true;
            //                 }
            //             }else if(that.username.length == 0){
            //                 that.showusernamestatus = false;
            //                 that.succeed = false;
            //                 that.failure = false;
            //             }
            //         }
            //     }
            // }
        },
        togglepassword:function (){
            this.showpassword = !this.showpassword;
            if(this.showpassword){
                this.passwordtype = "text";
            }else{
                this.passwordtype = "password";
            }
        },
        savename:function (){
            [this.usern9ame,this.password] = trim(this.username,this.password);

            if(this.username == "" || this.password == ""){
                layer.open({
                    content: "请填写完整账号与密码",
                    skin: 'msg',
                    time: 2,
                });
                return false;
            }

            if(this.failure){
                layer.open({
                    content: "已有相同用户名",
                    skin: 'msg',
                    time: 2,
                });
                return false;
            }
            // var that = this;
            // var ajaxargument = "";
            // ajaxargument = `username=${this.username}&password=${this.password}`;

            // var ajax = new XMLHttpRequest();
            // ajax.open('post','/node/savename');
            // ajax.send(ajaxargument);
            // ajax.onreadystatechange = function () {
            //     if (ajax.readyState==4 &&ajax.status==200) {
            //         var data = ajax.responseText;
            //         data = myparse(data);
            //         console.log(data);//输入相应的内容
            //         if(data.status == 1){
            //             layer.open({
            //                 content: "注册成功",
            //                 skin: 'msg',
            //                 time: 2,
            //             });
            //             var time = setTimeout(()=>{
            //                 that.$router.push({path: '/login'});
            //             },2000);
            //         }
            //     }
            // }
        },
        keyup:function (e){
            if(e.keyCode == 13){
                this.savename();
            }
        }
    },
    components:{

    },
    mounted: function (){

        // var ajax2 = new XMLHttpRequest();
        // ajax2.open('post','/result');
        // ajax2.send();
        // ajax2.onreadystatechange = function () {
        //     if (ajax2.readyState==4 &&ajax2.status==200) {
        // 　　　　console.log(ajax2.responseText);//输入相应的内容
        //   　　}
        // }
    }
}
</script>

<style>
    .loginwrap{
        background-color: white;
        height: 100vh;
    }
    .centerwrap .img{
        padding: 20px 0 0;
        width: 70%;
    }
    .centerwrap .logininputregister{
        border: none;
        border-bottom: 1px solid #e2e2e2;
        width: 100%;
        line-height: 50px;
        margin: 10px 0;
        font-size: 16px;
        color: #a98604;
        outline: none;
    }
    .logininputsucceed{
        box-shadow:0px 5px 10px -5px #39c163;
        /* box-shadow:0px 5px 10px -5px #0084c6; */
    }
    .logininputfailure{
        box-shadow:0px 5px 10px -5px #c33030;
    }
    .centerwrap .logininputregister::-webkit-input-placeholder {
        color: #8fa2dc;
    }
    .centerwrap .logininputregister:-moz-placeholder {
        color: #8fa2dc;
    }
    .centerwrap .logininputregister::-moz-placeholder {
        color: #8fa2dc;
    }
    .centerwrap .logininputregister:-ms-input-placeholder {
        color: #8fa2dc;
    }
    .centerwrap .loginbtnregister{
        display: block;
        width: 80%;
        line-height: 42px;
        background-color: #617FDF;
        color: white;
        text-align: center;
        text-decoration: none;
        margin: 15px 0 0;
        border-radius: 3px;
    }
    .centerwrap .logingrayregister a{
        color: #a0a0a0;
        text-decoration: none;
        font-size: 14px;
    }
    .locationmiddle::before{
        content: " ";
        position: relative;
        display: block;
        width: 10px;
        height: 10px;
        top: 50%;
        left: 0;
        background-color: #39c163;
    }
    .usernamewrap, .passwordwrap{
        width: 80%;
        position: relative;
    }
    .showpassword, .notshowpassword, .succeed, .failure{
        content: " ";
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
        top: 50%;
        right: 0;
        transform: translate(0, -50%);
    }
    .showpassword{
        /* tick.png */
        /* cross.png */
        /* show.png */
        /* hide.png */
        background: url('./../../static/images/icon/hide.png');
        background-size: 20px 20px;
    }
    .notshowpassword{
        background: url('./../../static/images/icon/show.png');
        background-size: 20px 20px;
    }
    .succeed{
        background: url('./../../static/images/icon/tick.png');
        background-size: 20px 20px;
    }
    .failure{
        background: url('./../../static/images/icon/cross.png');
        background-size: 20px 20px;
    }
</style>
