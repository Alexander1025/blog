<template>
    <div class="indexwrap">
        <router-link to="/">
            <div class="bgfullcover">

            </div>
        </router-link>
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
    mounted:function (){

    }
}
</script>

<style>
    .bgfullcover{
        width: 100vw;
        height: 100vh;
        background-image: url('./../../static/images/common/404.jpg');
        background-size: 100% 100%;
    }
</style>
