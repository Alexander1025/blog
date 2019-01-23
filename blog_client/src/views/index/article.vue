<template>
    <div class="indexwrap article">
        <commonHead></commonHead>
        <div class="indexwrap indextop">
            <div class="mainwrap articleimg">
                <img :src="'/blog_server/myupload/'+img" alt="">
            </div>
        </div>
        <div class="indexwrap" style="background-color: #f6f7f8;">
            <div class="mainwrap mainbody" style="background-color: white;">
                <div class="bodypart">
                    <div class="title">
                        {{title}}
                        <span>
                            {{describe}}
                        </span>
                    </div>
                    <div class="information">
                        <div class="article_bottom">
                            <div class="article_author">
                                <img src="./../../static/images/icon/figure_gray.png" alt="">
                                <span>
                                    {{author}}
                                </span>
                            </div>
                            <div class="article_date">
                                <img src="./../../static/images/icon/time_gray.png" alt="">
                                <span>
                                    {{creat_time}}
                                </span>
                            </div>
                            <div class="article_quantity">
                                <img src="./../../static/images/icon/footprint_gray.png" alt="">
                                <span>
                                    {{flow}}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        class="content"
                        v-html="content"
                    >
                    </div>
                </div>
                <bodyside
                    :categorylistarr="$store.state.categorylistarr"
                ></bodyside>
            </div>
        </div>
        <commonFoot></commonFoot>
    </div>
</template>

<script>
import {trim,myparse} from './../../static/js/common.js';
// import './../../static/css/article.css';

import commonHead from '@/components/commonhead.vue';
import commonFoot from '@/components/commonFoot.vue';
import cutline from '@/components/cutline.vue';
import commonarticle from '@/components/commonarticle.vue';
import categorylist from '@/components/categorylist.vue';
import bodyside from '@/components/bodyside.vue';


export default {
    data () {
        return {
            message: '',
            id: '',
            title: '',
            describe: '',
            author: '',
            creat_time: '',
            flow: '',
            img: '',
            content: '',

            authorid: 1,
            category_id: 1,
            place: 1,
            status: 1,
        }
    },
    components:{
        commonHead,
        commonFoot,
        cutline,
        commonarticle,
        categorylist,
        bodyside
    },
    watch:{
        content:function (){
            this.$nextTick(function () {
                this.content = this.content.replace(/&lt;/g,"<");
                this.content = this.content.replace(/&gt;/g,">");
            })
        }
    },
    mounted:function (){
        var url = location.search;
        url = url.replace("?","");
        var query = url.split("&");
        for(var i = 0 ; i <= query.length-1 ; i++){
            var parameter = query[i].split("=")[0];
            if(parameter == "articleid"){

                var that = this;

                // 用于获取文章分类列表信息
                var ajaxargument = `id=${query[i].split("=")[1]}`;
                var ajax = new XMLHttpRequest();
                ajax.open('post','/node/index/articleget');
                ajax.send(ajaxargument);
                ajax.onreadystatechange = function () {
                    if (ajax.readyState==4 &&ajax.status==200) {
                        var data = ajax.responseText;
                        data = myparse(data);
                        // console.log(data);//输入相应的内容
                        if(data.status == 1){
                            // that.$store.commit('setState',{attr:'categorylistarr',field:data.data.category});
                            that.id = data.data[0]['id'];
                            that.title = data.data[0]['title'];
                            that.describe = data.data[0]['describe'];
                            that.author = data.data[0]['author'];
                            that.creat_time = data.data[0]['creat_time'];
                            that.flow = data.data[0]['flow'];
                            that.img = data.data[0]['img'];
                            that.content = data.data[0]['content'];
                            that.authorid = data.data[0]['authorid'];
                            that.category_id = data.data[0]['category_id'];
                            that.place = data.data[0]['place'];
                            that.status = data.data[0]['status'];
                        }else{
                            layer.open({
                                content: `获取文章失败`,
                                skin: 'msg',
                                time: 2,
                            });
                        }
                    }
                }





                var that = this;

                // 用于文章埋点
                var ajaxargument2 = `id=${query[i].split("=")[1]}`;
                var ajax2 = new XMLHttpRequest();
                ajax2.open('post','/node/index/count');
                ajax2.send(ajaxargument2);
                ajax2.onreadystatechange = function () {
                    if (ajax2.readyState==4 &&ajax2.status==200) {
                        var data = ajax2.responseText;
                        data = myparse(data);
                        // console.log(data);//输入相应的内容
                        if(data.status == 1){
                            // that.$store.commit('setState',{attr:'categorylistarr',field:data.data.category});
                            that.flow = data.data;
                        }else{
                            layer.open({
                                content: `浏览量`,
                                skin: 'msg',
                                time: 2,
                            });
                        }
                    }
                }



            }
        }


        if(this.$store.state.categorylistarr.length == 0){
            var that = this;

            // 用于获取文章分类列表信息
            var ajaxargument1 = "";
            var ajax1 = new XMLHttpRequest();
            ajax1.open('post','/node/index/categorylistget');
            ajax1.send(ajaxargument1);
            ajax1.onreadystatechange = function () {
                if (ajax1.readyState==4 &&ajax1.status==200) {
                    var data = ajax1.responseText;
                    data = myparse(data);
                    // console.log(data);//输入相应的内容
                    if(data.status == 1){
                        that.$store.commit('setState',{attr:'categorylistarr',field:data.data.category});
                    }else{
                        layer.open({
                            content: `获取文章分类失败`,
                            skin: 'msg',
                            time: 2,
                        });
                    }
                }
            }
        }





    },
    methods:{

    }
}
</script>

<style>

</style>
