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
                <div :class="[ isshowmusic? 'active' : '' ]" id="iframewrap" ref="iframewrap">
                </div>
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
            isshowmusic: false,
        }
    },
    components:{

    },
    mounted:function (){
        var that = this;
        window.onresize = function(){
            that.isshowheadtag = false;
        }
        var arr = [
            '//music.163.com/outchain/player?type=2&id=1308828278',//是什么然我遇见这样的你
            '//music.163.com/outchain/player?type=2&id=1335906877',//阴天快乐
            '//music.163.com/outchain/player?type=2&id=27937875',//天上人间
            '//music.163.com/outchain/player?type=2&id=415793539',//重来
            '//music.163.com/outchain/player?type=2&id=31152396',//放心去飞
            '//music.163.com/outchain/player?type=2&id=496869422',//打上火花
            '//music.163.com/outchain/player?type=2&id=1323304621',//浪子回头
            '//music.163.com/outchain/player?type=2&id=462523146',//电子纯音乐 IV
            '//music.163.com/outchain/player?type=2&id=490106148',//山下 - 方十一
        ];
        var arrlen = arr.length;
        var lucknumber = parseInt(Math.random()*arrlen);
        var musicurl = arr[lucknumber];
        this.$refs.iframewrap.innerHTML = `<iframe id="iframe" frameborder="no" border="0" marginwidth="0" marginheight="0" width=260 height=52 src="${musicurl}&auto=1&height=32"></iframe>`;
        var iframe = document.getElementById("iframe");
        iframe.onload = function (){
            var time = setTimeout(function (){
                that.isshowmusic = true;
            },1500);
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
            this.isshowheadtag = false;
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
