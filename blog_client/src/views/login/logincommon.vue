<template>
    <div class="loginwrap">
        <div class="topleft">
            <router-link to="/">
                <img src="./../../static/images/icon/homesign.png" alt="">
            </router-link>
        </div>
        <div class="center">
            <img class="img" src="./../../static/images/common/littlelogo.png" alt="">
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    data () {
        return {
            message: ''
        }
    },
    components:{

    },
    mounted: function (){

        // var ajax2 = new XMLHttpRequest();
        // ajax2.open('post','/node/result');
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
    .center .img{
        margin: auto;
    }
    .center{
        text-align: center;
    }
    .loginwrap{
        background-color: white;
        height: 100vh;
    }
    .centerwrap .img{
        padding: 20px 0 20px;
        width: 70%;
    }
    .centerwrap{
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: center;
    }
    .verticalbetween{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }
    .logininput{
        border: none;
        border-bottom: 1px solid #e2e2e2;
        width: 80%;
        line-height: 50px;
        margin: 10px 0;
        font-size: 16px;
        color: #a98604;
    }
    .logininput::-webkit-input-placeholder {
        color: #62a7ca;
    }
    .logininput:-moz-placeholder {
        color: #62a7ca;
    }
    .logininput::-moz-placeholder {
        color: #62a7ca;
    }
    .logininput:-ms-input-placeholder {
        color: #62a7ca;
    }
    .loginbtn{
        display: block;
        width: 80%;
        line-height: 42px;
        background-color: #0084c6;
        color: white;
        text-align: center;
        text-decoration: none;
        margin: 15px 0 0;
        border-radius: 3px;
    }
    .topleft{
        padding: 15px 5% 15px;
    }
    .topleft img{
        width: 8%;
    }
    .logingray{
        margin: 15px 0 0;
        width: 80%;
    }
    .logingray a{
        color: #a0a0a0;
        text-decoration: none;
        font-size: 14px;
    }
</style>
