<template>
    <div class="commonarticle">
        <div
            class="article_img"
            @click="skip(id)"
        >
            <img :src="img" alt="">
        </div>
        <div
            class="article_cont"
            @click="skip(id)"
        >
            <div class="article_title">
                {{title}}
            </div>
            <div class="article_desc">
                {{desc}}
            </div>
            <div class="article_bottom">
                <div class="article_author">
                    <img :src="`./../static/images/icon/figure_${color}.png`" alt="" @error="setDefaultImage">
                    <span>
                        {{author}}
                    </span>
                </div>
                <div class="article_date">
                    <img :src="`./../static/images/icon/time_${color}.png`" alt="" @error="setDefaultImage">
                    <span>
                        {{date}}
                    </span>
                </div>
                <div class="article_quantity">
                    <img :src="`./../static/images/icon/footprint_${color}.png`" alt="" @error="setDefaultImage">
                    <span>
                        {{quantity}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            message: ''
        }
    },
    props:['id','tag','title','desc','author','date','quantity','img','color'],
    components:{

    },
    mounted:function (){

    },
    methods:{
        setDefaultImage: function (e){
            e.target.src = 'http://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a23405d42f1340b5ac8e9a38bea83438~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp?';
        },
        skip: function (id){
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            this.$router.push({
                path: '/article',
                query: {
                    articleid: id,
                }
            });
        }
    }
}
</script>

<style>
    body {
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
