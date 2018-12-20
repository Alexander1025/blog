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
import '@/static/css/login.css';

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

</style>
