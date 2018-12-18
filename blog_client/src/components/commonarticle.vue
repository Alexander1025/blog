<template>
    <div class="commonarticle">
        <div class="article_img">
            <img :src="img" alt="">
        </div>
        <div class="article_cont">
            <div class="article_title">
                {{title}}
            </div>
            <div class="article_desc">
                {{desc}}
            </div>
            <div class="article_bottom">
                <div class="article_author">
                    <img src="./../static/images/icon/figure_white.png" alt="">
                    <span>
                        {{author}}
                    </span>
                </div>
                <div class="article_date">
                    <img src="./../static/images/icon/time_white.png" alt="">
                    <span>
                        {{date}}
                    </span>
                </div>
                <div class="article_quantity">
                    <img src="./../static/images/icon/footprint_white.png" alt="">
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
    props:['id','tag','title','desc','author','date','quantity','img'],
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
