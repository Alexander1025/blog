<template>
    <div class="centerwrap">

        <div class="usernamewrap">
            <input
                class="logininput"
                type="text"
                placeholder="账号"

                v-focus
                v-model="username"
            >
        </div>
        <div class="passwordwrap">
            <input
                class="logininput"
                placeholder="密码"

                :type="passwordtype"
                v-model="password"
                @keyup="keyup"
            >
            <div :class="[showpassword?'showpassword':'notshowpassword']" @click="togglepassword();"></div>
        </div>
        <a @click="loginsubmit" class="loginbtn" href="javascript:void(0);">登录</a>
        <div class="logingray verticalbetween">
            <a href="javascript:void(0);">忘记密码</a>
            <router-link to="/login/register">
                <a href="javascript:void(0);">创建账户</a>
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

            // 是否显示密码，默认不显示
            showpassword:false,
            passwordtype:'password',
        }
    },
    components:{

    },
    mounted: function (){

        var ajax2 = new XMLHttpRequest();
        ajax2.open('post','/node/login/test');
        ajax2.send();
        ajax2.onreadystatechange = function () {
            if (ajax2.readyState==4 &&ajax2.status==200) {
        　　　　console.log(ajax2.responseText);//输入相应的内容
          　　}
        }
    },
    methods:{
        togglepassword:function (){
            this.showpassword = !this.showpassword;
            if(this.showpassword){
                this.passwordtype = "text";
            }else{
                this.passwordtype = "password";
            }
        },
        loginsubmit:function (){
            [this.username,this.password] = trim(this.username,this.password);

            if(this.username == "" || this.password == ""){
                layer.open({
                    content: "请填写完整账号与密码",
                    skin: 'msg',
                    time: 2,
                });
                return false;
            }


            // var that = this;
            // var ajaxargument = "";
            // ajaxargument = `username=${this.username}&password=${this.password}`;

            // var ajax = new XMLHttpRequest();
            // ajax.open('post','/node/login');
            // ajax.send(ajaxargument);
            // ajax.onreadystatechange = function () {
            //     if (ajax.readyState==4 &&ajax.status==200) {
            //         var data = ajax.responseText;
            //         data = myparse(data);
            //         console.log(data);//输入相应的内容
            //         if(data.status == 1){
            //             layer.open({
            //                 content: `${data.data[0].username},欢迎回来`,
            //                 skin: 'msg',
            //                 time: 2,
            //             });
            //             var time = setTimeout(()=>{
            //                 that.$router.push({path: '/'});
            //             },2000);
            //         }else{
            //             that.password = "";
            //             layer.open({
            //                 content: `账号或密码错误，请重新输入`,
            //                 skin: 'msg',
            //                 time: 2,
            //             });
            //         }
            //     }
            // }
        },
        keyup:function (e){
            if(e.keyCode == 13){
                this.loginsubmit();
            }
        }
    }
}
</script>

<style>

</style>
