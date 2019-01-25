<template>
    <div class="indexwrap commonhead">
        <div class="mainwrap mainhead">
            <img @click="href('/')" class="logoimg" src="./../static/images/common/logo.png" alt="机智僧">
            <ul class="headtag" v-if="!isshowheadtag">
                <li v-for="(item, index) in $store.state.headtagarr" @click="href(item.url ,item.newPage ,item.fullurl)" :class="[item.isactive?'active':'']">
                    {{item.cont}}
                </li>
            </ul>
            <div class="headtoggle" @click="headtoggle">
                <img src="./../static/images/icon/Hamburger_white.png" alt="汉堡包">
            </div>
            <transition name="headtagphone">
                <ul class="headtagphone headtag" v-if="isshowheadtag">
                    <li v-for="(item, index) in $store.state.headtagarr" @click="href(item.url)" :class="[item.isactive?'active':'']">
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
        href: function (url ,newPage ,fullurl){
            if(newPage){
                window.open(url,"_blank");
            }else{
                if(fullurl){
                    window.location.href = url;
                }else{
                    this.$router.push({path: url});
                }
            }
        }
    }
}
</script>

<style>

</style>
