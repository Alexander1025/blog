<template>
    <div class="indexwrap commonhead">
        <div class="mainwrap mainhead">
            <img class="logoimg" src="./../static/images/common/logo.png" alt="机智僧">
                <ul class="headtag" v-if="!isshowheadtag">
                    <li class="active">首页</li>
                    <li>前端</li>
                    <li>应用</li>
                    <li>标签</li>
                    <li>杂谈</li>
                    <li>留言</li>
                    <li>音乐</li>
                    <li>关于</li>
                </ul>
            <div class="headtoggle" @click="headtoggle">
                <img src="./../static/images/icon/Hamburger_white.png" alt="汉堡包">
            </div>
            <transition name="headtagphone">
                <ul class="headtagphone headtag" v-if="isshowheadtag">
                    <li class="active">首页</li>
                    <li>前端</li>
                    <li>应用</li>
                    <li>标签</li>
                    <li>杂谈</li>
                    <li>留言</li>
                    <li>音乐</li>
                    <li>关于</li>
                </ul>
            </transition>
        </div>
        <div class="tagwrap" v-if="isshowheadtag" @click="headtoggle"></div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            isshowheadtag: false,
        }
    },
    components:{

    },
    mounted:function (){
        var that = this;
        window.onresize = function(){
            that.isshowheadtag = false;
        }
    },
    methods:{
        headtoggle:function(){
            console.log("asd");
            this.isshowheadtag = !this.isshowheadtag;
        }
    }
}
</script>

<style>

</style>
