<template>
    <div class="indexwrap commonhead">
        <div class="mainwrap mainhead">
            <a href="http://www.zhoujizhi.com">
                <img class="logoimg" src="./../static/images/common/logo.png" alt="机智僧">
            </a>
                <ul class="headtag" v-if="!isshowheadtag">
                    <li v-for="(item, index) in headtagarr" :class="[item.isactive?'active':'']">
                        {{item.cont}}
                    </li>
                </ul>
            <div class="headtoggle" @click="headtoggle">
                <img src="./../static/images/icon/Hamburger_white.png" alt="汉堡包">
            </div>
            <transition name="headtagphone">
                <ul class="headtagphone headtag" v-if="isshowheadtag">
                    <li v-for="(item, index) in headtagarr" :class="[item.isactive?'active':'']">
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
                },
                {
                    isactive: false,
                    cont: "前端",
                },
                {
                    isactive: false,
                    cont: "应用",
                },
                {
                    isactive: false,
                    cont: "标签",
                },
                {
                    isactive: false,
                    cont: "杂谈",
                },
                {
                    isactive: false,
                    cont: "留言",
                },
                {
                    isactive: false,
                    cont: "音乐",
                },
                {
                    isactive: false,
                    cont: "关于",
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
        }
    }
}
</script>

<style>

</style>
