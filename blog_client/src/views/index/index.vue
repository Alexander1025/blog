<template>
    <div class="indexwrap">
        <commonHead></commonHead>
        <indexTop
            :featured="featured"
            :recommend="recommend"
        ></indexTop>
        <indexMain
            :articlemodule="articlemodule"
            :categorylistarr="categorylistarr"
        ></indexMain>
        <commonFoot></commonFoot>
    </div>
</template>

<script>
import indexTop from '@/components/indextop.vue';
import commonHead from '@/components/commonhead.vue';
import indexMain from '@/components/indexMain.vue';
import commonFoot from '@/components/commonFoot.vue';


export default {
    data () {
        return {
            message: '',
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
            ],
            articlemodule:[
                {
                    title:"推荐文章",
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
                },
                {
                    title:"JAVASCRIPT",
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
                }
            ],
            categorylistarr:[
                {
                    text:"前端",
                    id:1
                },
                {
                    text:"node",
                    id:2
                },
            ],
        }
    },
    components:{
        indexTop,
        commonHead,
        indexMain,
        commonFoot,
    },
    mounted:function (){

    }
}
</script>

<style>

</style>
