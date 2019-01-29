<template>
    <div class="indexwraptop">
        <div class="indexwrap commonhead fixed">
            <div class="mainwrap mainhead">
                <img @click="href('/', false, false, 0)" class="logoimg" src="./../static/images/common/logo.png" alt="机智僧">
                <ul class="headtag" v-if="!isshowheadtag">
                    <li v-for="(item, index) in $store.state.headtagarr" @click="href(item.url, item.newPage, item.fullurl, index)" :class="[item.isactive?'active':'']">
                        {{item.cont}}
                    </li>
                </ul>
                <div class="headtoggle" @click="headtoggle">
                    <img src="./../static/images/icon/Hamburger_white.png" alt="汉堡包">
                </div>
                <transition name="headtagphone">
                    <ul class="headtagphone headtag" v-if="isshowheadtag">
                        <li v-for="(item, index) in $store.state.headtagarr" @click="href(item.url, item.newPage, item.fullurl)" :class="[item.isactive?'active':'']">
                            {{item.cont}}
                        </li>
                    </ul>
                </transition>
            </div>
            <div class="tagwrap" v-if="isshowheadtag" @click="headtoggle"></div>
        </div>
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
        /**
         * @param url 要跳转的地址
         * @param newPage 是否新开一个页面
         * @param fullurl 是否带有http://  的地址
         * @param index 特有index，其他地方不需要
         */
        href: function (url, newPage, fullurl, index){
            if(index != undefined){
                // active
                for(var i = 0 ; i <= this.$store.state.headtagarr.length-1 ; i++){
                    this.$store.state.headtagarr[i]['isactive'] = false;
                }
                this.$store.state.headtagarr[index]['isactive'] = true;
            }
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
