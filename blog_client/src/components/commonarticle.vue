<template>
    <div class="commonarticle">
        <div class="article_img">
            <a href="###">
                <img :src="img" alt="">
            </a>
        </div>
        <div class="article_cont">
            <a href="/article">
                <div class="article_title">
                    {{title}}
                </div>
                <div class="article_desc">
                    {{desc}}
                </div>
                <div class="article_bottom">
                    <div class="article_author">
                        <img :src="`./../static/images/icon/figure_${color}.png`" alt="">
                        <span>
                            {{author}}
                        </span>
                    </div>
                    <div class="article_date">
                        <img :src="`./../static/images/icon/time_${color}.png`" alt="">
                        <span>
                            {{date}}
                        </span>
                    </div>
                    <div class="article_quantity">
                        <img :src="`./../static/images/icon/footprint_${color}.png`" alt="">
                        <span>
                            {{quantity}}
                        </span>
                    </div>
                </div>
            </a>
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

    }
}
</script>

<style>
    body {
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
