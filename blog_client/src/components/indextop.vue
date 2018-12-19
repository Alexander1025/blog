<template>
    <div class="indexwrap indextop">
        <div class="mainwrap">
            <div class="featured">
                <commonarticle
                    :id="featured[0].id"
                    :tag="featured[0].tag"
                    :title="featured[0].title"
                    :desc="featured[0].desc"
                    :author="featured[0].author"
                    :date="featured[0].date"
                    :quantity="featured[0].quantity"
                    :img="featured[0].img"
                    :color="featured[0].color"
                />
            </div>
            <div class="recommend">
                <commonarticle
                    v-for="(item, index) in recommend"
                    :id="item.id"
                    :tag="item.tag"
                    :title="item.title"
                    :desc="item.desc"
                    :author="item.author"
                    :date="item.date"
                    :quantity="item.quantity"
                    :img="item.img"
                    :key="item.id"
                    :color="item.color"
                />
            </div>
        </div>
    </div>
</template>

<script>
import commonarticle from '@/components/commonarticle.vue';

export default {
    data () {
        return {
            featured:[
                {
                    'id':"1",
                    'tag':"10",
                    'title':"欢迎来到机智僧的博客",
                    'desc':"这里是机智僧的博客,欢迎大家常来博客打卡 ^_^",
                    'author':"机智僧",
                    'date':"2018-10-1",
                    'quantity':"168",
                    'img':"./../static/images/upload/indextop.jpg",
                    'color':"white",
                }
            ],
            recommend:[
                {
                    'id':"2",
                    'tag':"10",
                    'title':"欢迎来到机智僧的博客",
                    'desc':"这里是机智僧的博客,欢迎大家常来博客打卡 ^_^",
                    'author':"机智僧",
                    'date':"2018-10-1",
                    'quantity':"168",
                    'img':"./../static/images/upload/indextop.jpg",
                    'color':"white",
                },
                {
                    'id':"3",
                    'tag':"10",
                    'title':"欢迎来到机智僧的博客",
                    'desc':"这里是机智僧的博客,欢迎大家常来博客打卡 ^_^",
                    'author':"机智僧",
                    'date':"2018-10-1",
                    'quantity':"168",
                    'img':"./../static/images/upload/indextop.jpg",
                    'color':"white",
                },
                {
                    'id':"4",
                    'tag':"10",
                    'title':"欢迎来到机智僧的博客",
                    'desc':"这里是机智僧的博客,欢迎大家常来博客打卡 ^_^",
                    'author':"机智僧",
                    'date':"2018-10-1",
                    'quantity':"168",
                    'img':"./../static/images/upload/indextop.jpg",
                    'color':"white",
                },
            ]
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
