<template>
    <div class="indexwrap article">
        <div class="indexwrap indextop">
            <div class="mainwrap articleimg">
                <img :src="'/blog_server/myupload/'+img" alt="" @error="setDefaultImage">
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
                                <img src="./../../static/images/icon/figure_gray.png" alt="" @error="setDefaultImage">
                                <span>
                                    {{author}}
                                </span>
                            </div>
                            <div class="article_date">
                                <img src="./../../static/images/icon/time_gray.png" alt="" @error="setDefaultImage">
                                <span>
                                    {{creat_time}}
                                </span>
                            </div>
                            <div class="article_quantity">
                                <img src="./../../static/images/icon/footprint_gray.png" alt="" @error="setDefaultImage">
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
                    <comment
                        :commentlist="commentlist"
                        @getgetcomment="getgetcomment"
                    ></comment>
                </div>
                <bodyside
                    :categorylistarr="$store.state.categorylistarr"
                ></bodyside>
            </div>
        </div>
    </div>
</template>

<script>
import {trim,myparse} from './../../static/js/common.js';
// import './../../static/css/article.css';

import cutline from '@/components/cutline.vue';
import commonarticle from '@/components/commonarticle.vue';
import categorylist from '@/components/categorylist.vue';
import bodyside from '@/components/bodyside.vue';

import comment from '@/components/comment.vue';


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
            commentlist:[
                // {
                //     img:"./../static/images/icon/comment_gray.png",
                //     author:"asd",
                //     cont:"qweqwe",
                //     createtime:`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}   ${new Date().getHours() > 12 ? new Date().getHours()-12 : new Date().getHours()}时${new Date().getMinutes()}分`,
                // }
            ],
        }
    },
    components:{
        cutline,
        commonarticle,
        categorylist,
        bodyside,
        comment
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
                this.getarticleget(query[i].split("=")[1]);
                this.getgetcomment(query[i].split("=")[1]);
                this.getcount(query[i].split("=")[1]);
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
        setDefaultImage: function (e){
            e.target.src = 'http://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a23405d42f1340b5ac8e9a38bea83438~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp?';
        },
        getarticleget:function (query){
            var that = this;

            // 用于获取文章分类列表信息
            var ajaxargument = `id=${query}`;
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
        },
        getgetcomment:function (){
            var url = location.search;
            url = url.replace("?","");
            var query = url.split("&");
            for(var i = 0 ; i <= query.length-1 ; i++){
                var parameter = query[i].split("=")[0];
                if(parameter == "articleid"){
                    var that = this;

                    // 用于获取评论
                    var ajaxargument3 = `articleid=${query[i].split("=")[1]}`;
                    var ajax3 = new XMLHttpRequest();
                    ajax3.open('post','/node/index/getcomment');
                    ajax3.send(ajaxargument3);
                    ajax3.onreadystatechange = function () {
                        if (ajax3.readyState==4 &&ajax3.status==200) {
                            var data = ajax3.responseText;
                            data = myparse(data);
                            // console.log(data);//输入相应的内容
                            if(data.status == 1){
                                that.commentlist = [];
                                for(var i = 0 ; i <= data.data.length-1 ; i++){
                                    var newObj = {};
                                    newObj.author = data.data[i].author;
                                    if(data.data[i].author == "机智僧"){
                                        newObj.img = "./../static/images/common/littlelogo.png";
                                    }else{
                                        newObj.img = "./../../static/images/icon/pig.png";
                                    }
                                    newObj.commentid = data.data[i].commentid;
                                    newObj.cont = data.data[i].cont;
                                    newObj.createtime = `${new Date(parseInt(data.data[i].createtime)).getFullYear()}-${new Date(parseInt(data.data[i].createtime)).getMonth()+1}-${new Date(parseInt(data.data[i].createtime)).getDate()}   ${new Date(parseInt(data.data[i].createtime)).getHours() > 12 ? new Date(parseInt(data.data[i].createtime)).getHours()-12 : new Date(parseInt(data.data[i].createtime)).getHours()}时${new Date(parseInt(data.data[i].createtime)).getMinutes()}分 ${new Date(parseInt(data.data[i].createtime)).getHours() > 12 ? '下午' : '上午'}`;
                                    newObj.email = data.data[i].email;
                                    that.commentlist.push(newObj);
                                }
                            }else{
                                layer.open({
                                    content: `获取评论失败`,
                                    skin: 'msg',
                                    time: 2,
                                });
                            }
                        }
                    }
                }
            }

        },
        getcount:function (query){
            var that = this;

            // 用于文章埋点
            var ajaxargument2 = `id=${query}`;
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
                            content: `获取浏览量失败`,
                            skin: 'msg',
                            time: 2,
                        });
                    }
                }
            }
        }
    }
}
</script>

<style>

</style>
