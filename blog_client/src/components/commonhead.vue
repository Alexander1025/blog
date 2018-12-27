<template>
    <div class="indexwrap commonhead">
        <div class="mainwrap mainhead">
            <img @click="href('/')" class="logoimg" src="./../static/images/common/logo.png" alt="机智僧">
            <ul class="headtag" v-if="!isshowheadtag">
                <li v-for="(item, index) in headtagarr" @click="href(item.url)" :class="[item.isactive?'active':'']">
                    {{item.cont}}
                </li>
            </ul>
            <div class="headtoggle" @click="headtoggle">
                <img src="./../static/images/icon/Hamburger_white.png" alt="汉堡包">
            </div>
            <transition name="headtagphone">
                <ul class="headtagphone headtag" v-if="isshowheadtag">
                    <li v-for="(item, index) in headtagarr" @click="href(item.url)" :class="[item.isactive?'active':'']">
                        {{item.cont}}
                    </li>
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
            headtagarr: [
                {
                    isactive: true,
                    cont: "首页",
                    url: "/",
                },
                {
                    isactive: false,
                    cont: "前端",
                    url: "/",
                },
                {
                    isactive: false,
                    cont: "应用",
                    url: "/",
                },
                {
                    isactive: false,
                    cont: "标签",
                    url: "/",
                },
                {
                    isactive: false,
                    cont: "杂谈",
                    url: "/",
                },
                {
                    isactive: false,
                    cont: "留言",
                    url: "/",
                },
                {
                    isactive: false,
                    cont: "音乐",
                    url: "/",
                },
                {
                    isactive: false,
                    cont: "关于",
                    url: "/",
                },
                {
                    isactive: false,
                    cont: "后台管理",
                    url: "/admin/addcategory"
                },
                // {
                //     isactive: false,
                //     cont: this.$store.state.test
                // }
            ],
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
            this.isshowheadtag = !this.isshowheadtag;
        },
        href: function (url){
            this.$router.push({path: url});
        }
    }
}
</script>

<style>

</style>
