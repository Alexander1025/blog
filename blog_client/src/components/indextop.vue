<template>
    <div class="indexwrap indextop">
        <div class="mainwrap">
            <div class="featured">
                <commonarticle></commonarticle>
            </div>
            <div class="recommend">
                <commonarticle></commonarticle>
                <commonarticle></commonarticle>
                <commonarticle></commonarticle>
            </div>
        </div>
    </div>
</template>

<script>
import commonarticle from '@/components/commonarticle.vue';

export default {
    data () {
        return {
            message: ''
        }
    },
    components:{
        commonarticle
    },
    mounted:function (){

    }
}
</script>

<style>
    body {
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
