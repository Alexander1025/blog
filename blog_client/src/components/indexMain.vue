<template>
    <div class="indexwrap">
        <div class="mainwrap mainbody">
            <div class="bodypart">

                <div class="areawrap">
                    <cutline :title="'推荐文章'" :logo="'logo.png'"></cutline>
                    <div class="articlearea">
                        <commonarticle
                            v-for="(item, index) in article"
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

                <div class="areawrap">
                    <cutline :title="'JAVASCRIPT'" :logo="'logo.png'"></cutline>
                    <div class="articlearea">
                        <commonarticle
                            v-for="(item, index) in article2"
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
            <div class="bodyside">
                <div class="areawrap">
                    <cutline :title="'快讯'" :logo="'littlelogo.png'"></cutline>
                </div>
                <div class="areawrap">
                    <cutline :title="'分类目录'" :logo="'littlelogo.png'"></cutline>
                    <categorylist></categorylist>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import cutline from '@/components/cutline.vue';
import commonarticle from '@/components/commonarticle.vue';
import categorylist from '@/components/categorylist.vue';


export default {
    data () {
        return {
            article:[
                {
                    'id':"2",
                    'tag':"10",
                    'title':"欢迎来到机智僧的博客",
                    'desc':"这里是机智僧的博客,欢迎大家常来博客打卡 ^_^",
                    'author':"机智僧",
                    'date':"2018-10-1",
                    'quantity':"168",
                    'img':"./../static/images/upload/indextop.jpg",
                    'color':"gray",
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
                    'color':"gray",
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
                    'color':"gray",
                },
            ],
            article2:[
                {
                    'id':"2",
                    'tag':"10",
                    'title':"欢迎来到机智僧的博客",
                    'desc':"这里是机智僧的博客,欢迎大家常来博客打卡 ^_^",
                    'author':"机智僧",
                    'date':"2018-10-1",
                    'quantity':"168",
                    'img':"./../static/images/upload/indextop.jpg",
                    'color':"gray",
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
                    'color':"gray",
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
                    'color':"gray",
                },
                {
                    'id':"5",
                    'tag':"10",
                    'title':"欢迎来到机智僧的博客",
                    'desc':"这里是机智僧的博客,欢迎大家常来博客打卡 ^_^",
                    'author':"机智僧",
                    'date':"2018-10-1",
                    'quantity':"168",
                    'img':"./../static/images/upload/indextop.jpg",
                    'color':"gray",
                },
                {
                    'id':"6",
                    'tag':"10",
                    'title':"欢迎来到机智僧的博客",
                    'desc':"这里是机智僧的博客,欢迎大家常来博客打卡 ^_^",
                    'author':"机智僧",
                    'date':"2018-10-1",
                    'quantity':"168",
                    'img':"./../static/images/upload/indextop.jpg",
                    'color':"gray",
                },
            ]
        }
    },
    components:{
        cutline,
        commonarticle,
        categorylist,
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
