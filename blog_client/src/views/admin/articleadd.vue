<template>
    <div class="centerwrap articleadd">
        <adminTop :title="htmltitle" :logo="'littlelogo.png'"></adminTop>
        <div class="admindetail">
            <ul class="flextable">
                <li v-for="(item, index) in titlelist">{{item.text}}</li>
            </ul>
            <ul class="flextable">
                <li>
                    <input v-model="article_rank" type="text" placeholder="文章排序">
                </li>
                <li>
                    <input v-model="title" type="text" placeholder="文章标题">
                </li>
                <li>
                    <input v-model="describe" type="text" placeholder="描述">
                </li>
                <li>
                    <select v-model="category_id">
                        <option disabled value="">文章分类</option>
                        <option v-for="option in categorylist" v-bind:value="option.id">
                            {{ option.name }}
                        </option>
                    </select>
                </li>
            </ul>
            <br>
            <ul class="flextable">
                <li v-for="(item, index) in titlelist1">{{item.text}}</li>
            </ul>
            <ul class="flextable">
                <li>
                    <input v-model="creat_time" type="date" placeholder="创建时间">
                </li>
                <li>
                    <input v-model="author" type="text" placeholder="文章作者">
                </li>
                <li>
                    <input v-model="authorid" type="text" placeholder="作者id">
                </li>
                <li>
                    <input v-model="status" type="text" placeholder="状态">
                </li>
            </ul>
            <br>
            <ul class="flextable">
                <li v-for="(item, index) in titlelist2">{{item.text}}</li>
            </ul>
            <ul class="flextable">
                <li>
                    <input v-model="img" type="text" placeholder="封面图片">
                </li>
                <li>
                    <img style="height: 44px;" :src="'/blog_server/myupload/'+img" alt="">
                </li>
                <li>
                    <input v-model="flow" type="text" placeholder="浏览量">
                </li>
                <li>
                    <input v-model="place" type="text" placeholder="位置">
                </li>
            </ul>
            <br>
            <editor :content="content" @changecont="changecont"></editor>
            <br>
            <ul class="flextable flexright">
                <li v-if="!isadded">
                    <div v-if="!isadd" @click="modform" class="add">提交文章全部信息</div>
                </li>
                <li v-if="!isadded">
                    <div v-if="isadd" @click="submitform" class="add">添加</div>
                    <div v-if="!isadd" @click="modificationform" class="add">提交已修改信息</div>
                </li>
                <li>
                    <div @click="fixation" class="add">编写文章模式</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {trim,myparse} from './../../static/js/common.js';

import adminTop from '@/components/admintop.vue';
import editor from '@/components/editor.vue';


export default {
    data () {
        return {
            id:"",
            title:"",
            describe:"",
            article_rank:"",
            category_id:"",
            creat_time:"",
            author:"",
            authorid:"",
            status:"",
            img:"indextop.jpg",
            flow:"",
            categorylist:"",
            content:"",
            place:"",
            isadd:true,
            isadded:false,
            htmltitle:"添加文章",
            modtitle:"",
            moddescribe:"",
            modarticle_rank:"",
            modcategory_id:"",
            modcreat_time:"",
            modauthor:"",
            modauthorid:"",
            modstatus:"",
            modimg:"",
            modflow:"",
            modplace:"",
            modcontent:"",
            titlelist: [
                {
                    'text':"编号"
                },
                {
                    'text':"文章标题"
                },
                {
                    'text':"描述"
                },
                {
                    'text':"文章分类"
                },
            ],
            titlelist1: [
                {
                    'text':"创建时间"
                },
                {
                    'text':"文章作者"
                },
                {
                    'text':"作者id"
                },
                {
                    'text':"状态"
                },
            ],
            titlelist2:[
                {
                    'text':"封面图片"
                },
                {
                    'text':"封面图片预览"
                },
                {
                    'text':"浏览量"
                },
                {
                    'text':"位置(默认0,1是头部大图片,2是小图片)"
                },
            ]
        }
    },
    props:["getindex"],
    components:{
        adminTop,
        editor,
    },
    watch:{
        title:function (){
            this.modtitle = this.title;
        },
        describe:function (){
            this.moddescribe = this.describe;
        },
        category_id:function (){
            this.modcategory_id = this.category_id;
        },
        article_rank:function (){
            this.modarticle_rank = this.article_rank;
        },
        creat_time:function (){
            this.modcreat_time = this.creat_time;
        },
        author:function (){
            this.modauthor = this.author;
        },
        authorid:function (){
            this.modauthorid = this.authorid;
        },
        status:function (){
            this.modstatus = this.status;
        },
        img:function (){
            this.modimg = this.img;
        },
        flow:function (){
            this.modflow = this.flow;
        },
        content:function (){
            this.modcontent = this.content;
        },
        place:function (){
            this.modplace = this.place;
        },


        // modid:"",
        // modtitle:"",
        // moddescribe:"",
        // modarticle_rank:"",
        // modcategory_id:"",
        // modcreat_time:"",
        // modauthor:"",
        // modauthorid:"",
        // modstatus:"",
        // modimg:"",
        // modflow:"",
        // modplace:"",
        // modcontent:"",


        // ajaxargument = `id=${this.id}
        // &title=${this.title}
        // &describe=${this.describe}
        // &category_id=${this.category_id}
        // &article_rank=${this.article_rank}
        // &creat_time=${this.creat_time}
        // &author=${this.author}
        // &authorid=${this.authorid}
        // &status=${this.status}
        // &img=${this.img}
        // &flow=${this.flow}
        // &content=${this.content}
        // &place=${this.place}`;
    },
    mounted: function (){
        this.getindex();

        var that = this;
        var ajaxargument = "";

        var ajax = new XMLHttpRequest();
        ajax.open('post','/node/admin/categoryget');
        ajax.send(ajaxargument);
        ajax.onreadystatechange = function () {
            if (ajax.readyState==4 &&ajax.status==200) {
                var data = ajax.responseText;
                data = myparse(data);
                console.log(data);//输入相应的内容
                if(data.status == 1){
                    that.categorylist = data.data;
                }else if(data.status == -1){
                    layer.open({
                        content: `${data.data}`,
                        skin: 'msg',
                        time: 2,
                    });
                    var time = setTimeout(()=>{
                        that.$router.push({
                            path: '/login',
                        });
                    },2000);
                }else if(data.status == -2){
                    layer.open({
                        content: `${data.data}`,
                        skin: 'msg',
                        time: 2,
                    });
                    var time = setTimeout(()=>{
                        that.$router.push({
                            path: '/login',
                        });
                    },2000);
                }else{
                    layer.open({
                        content: `获取分类失败`,
                        skin: 'msg',
                        time: 2,
                    });
                }
            }
        }

        var url = location.search;
        url = url.replace("?","");
        var query = url.split("&");
        for(var i = 0 ; i <= query.length-1 ; i++){
            var parameter = query[i].split("=")[0];
            if(parameter == "id"){
                this.categoryid = query[i].split("=")[1];
                // console.log(this.categoryid);
                // var that = this;
                var ajaxargument = "";
                ajaxargument = `id=${this.categoryid}`;

                var that = this;

                var ajax1 = new XMLHttpRequest();
                ajax1.open('post','/node/admin/articlegetmod');
                ajax1.send(ajaxargument);
                ajax1.onreadystatechange = function () {
                    if (ajax1.readyState==4 &&ajax1.status==200) {
                        var data = ajax1.responseText;
                        data = myparse(data);
                        console.log(data);//输入相应的内容
                        if(data.status == 1){
                            layer.open({
                                content: `获取文章成功`,
                                skin: 'msg',
                                time: 2,
                            });

                            // that.id = data.data[0].id;
                            // that.name = data.data[0].name;
                            // that.describe = data.data[0].describe;
                            // that.icon = data.data[0].icon;
                            // that.status = data.data[0].status;
                            // that.iconimg = "/blog_server/upload/"+data.data[0].icon;
                            // that.isupload = false;
                            // that.isadd = false;
                            that.id=data.data[0].id;
                            that.title=data.data[0].title;
                            that.describe=data.data[0].describe;
                            that.category_id=data.data[0].category_id;
                            that.article_rank=data.data[0].article_rank;
                            that.creat_time=data.data[0].creat_time;
                            // that.creat_time=data.data[0].creat_time;
                            that.author=data.data[0].author;
                            that.authorid=data.data[0].authorid;
                            that.status=data.data[0].status;
                            that.img=data.data[0].img;
                            that.content=data.data[0].content;
                            that.flow=data.data[0].flow;
                            that.place=data.data[0].place;
                            that.isadd = false;
                            that.htmltitle = "修改文章"+data.data[0].id;
                            that.$nextTick(function () {
                                that.initialize();
                            })

                        }else if(data.status == -1){
                            layer.open({
                                content: `${data.data}`,
                                skin: 'msg',
                                time: 2,
                            });
                            var time = setTimeout(()=>{
                                that.$router.push({
                                    path: '/login',
                                });
                            },2000);
                        }else if(data.status == -2){
                            layer.open({
                                content: `${data.data}`,
                                skin: 'msg',
                                time: 2,
                            });
                            var time = setTimeout(()=>{
                                that.$router.push({
                                    path: '/login',
                                });
                            },2000);
                        }else{
                            layer.open({
                                content: `获取文章失败`,
                                skin: 'msg',
                                time: 2,
                            });
                        }
                    }
                }
            }
        }

    },
    methods:{
        submitform:function (){
            // title :
            // describe :
            // category_id :
            // creat_time :
            // author :
            // authorid :
            // status :
            // img :
            // flow :
            if(!this.title || !this.describe || !this.category_id || !this.creat_time || !this.author || !this.authorid || !this.status || !this.img || !this.flow ||!this.content){
                layer.open({
                    content: `请填写完整`,
                    skin: 'msg',
                    time: 2,
                });
                return false;
            }
            var that = this;
            var ajaxargument = "";
            this.content = escape(this.content);
            ajaxargument = `title=${this.title}&describe=${this.describe}&category_id=${this.category_id}&article_rank=${this.article_rank}&creat_time=${this.creat_time}&author=${this.author}&authorid=${this.authorid}&status=${this.status}&img=${this.img}&flow=${this.flow}&content=${this.content}&place=${this.place}`;

            var ajax = new XMLHttpRequest();
            ajax.open('post','/node/admin/articleadd');
            ajax.send(ajaxargument);
            ajax.onreadystatechange = function () {
                if (ajax.readyState==4 &&ajax.status==200) {
                    var data = ajax.responseText;
                    data = myparse(data);
                    console.log(data);//输入相应的内容
                    if(data.status == 1){
                        layer.open({
                            content: `上传文章成功`,
                            skin: 'msg',
                            time: 2,
                        });
                        that.isadded = true;
                        // var time = setTimeout(()=>{
                        //     that.$router.push({path: '/admin/category'});
                        // },2000);
                    }else if(data.status == -1){
                        layer.open({
                            content: `${data.data}`,
                            skin: 'msg',
                            time: 2,
                        });
                        var time = setTimeout(()=>{
                            that.$router.push({
                                path: '/login',
                            });
                        },2000);
                    }else if(data.status == -2){
                        layer.open({
                            content: `${data.data}`,
                            skin: 'msg',
                            time: 2,
                        });
                        var time = setTimeout(()=>{
                            that.$router.push({
                                path: '/login',
                            });
                        },2000);
                    }else{
                        layer.open({
                            content: `上传文章失败`,
                            skin: 'msg',
                            time: 2,
                        });
                    }
                }
            }
        },
        initialize:function (){
            this.modtitle = "";
            this.moddescribe = "";
            this.modarticle_rank = "";
            this.modcategory_id = "";
            this.modcreat_time = "";
            this.modauthor = "";
            this.modauthorid = "";
            this.modstatus = "";
            this.modimg = "";
            this.modflow = "";
            this.modplace = "";
            this.modcontent = "";
        },
        modificationform:function (){
            // ajaxargument = `id=${this.id}
            // &title=${this.title}
            // &describe=${this.describe}
            // &category_id=${this.category_id}
            // &article_rank=${this.article_rank}
            // &creat_time=${this.creat_time}
            // &author=${this.author}
            // &authorid=${this.authorid}
            // &status=${this.status}
            // &img=${this.img}
            // &flow=${this.flow}
            // &content=${this.content}
            // &place=${this.place}`;
            var ajaxargument = "";
            ajaxargument = `id=${this.id}`;
            if(this.modtitle != ""){
                ajaxargument += `&title=${this.modtitle}`;
            }
            if(this.moddescribe != ""){
                ajaxargument += `&describe=${this.moddescribe}`;
            }
            if(this.modarticle_rank != ""){
                ajaxargument += `&article_rank=${this.modarticle_rank}`;
            }
            if(this.modcategory_id != ""){
                ajaxargument += `&category_id=${this.modcategory_id}`;
            }
            if(this.modcreat_time != ""){
                ajaxargument += `&creat_time=${this.modcreat_time}`;
            }
            if(this.modauthor != ""){
                ajaxargument += `&author=${this.modauthor}`;
            }
            if(this.modauthorid != ""){
                ajaxargument += `&authorid=${this.modauthorid}`;
            }
            if(this.modstatus != ""){
                ajaxargument += `&status=${this.modstatus}`;
            }
            if(this.modimg != ""){
                ajaxargument += `&img=${this.modimg}`;
            }
            if(this.modflow != ""){
                ajaxargument += `&flow=${this.modflow}`;
            }
            if(this.modplace != ""){
                ajaxargument += `&place=${this.modplace}`;
            }
            if(this.modcontent != ""){
                this.modcontent = escape(this.modcontent);
                ajaxargument += `&content=${this.modcontent}`;

            }
            var that = this;
            var ajax = new XMLHttpRequest();
            ajax.open('post','/node/admin/articlesetmodification');
            // ajax.setRequestHeader("Content-type","application/json; charset=utf-8");
            ajax.send(ajaxargument);
            console.log('ajaxargument: ', ajaxargument);
            ajax.onreadystatechange = function () {
                if (ajax.readyState==4 &&ajax.status==200) {
                    var data = ajax.responseText;
                    data = myparse(data);
                    console.log(data);//输入相应的内容
                    if(data.status == 1){
                        layer.open({
                            content: `修改文章成功`,
                            skin: 'msg',
                            time: 2,
                        });
                        var time = setTimeout(()=>{
                            that.$router.push({path: '/admin/article'});
                        },300);
                    }else if(data.status == -1){
                        layer.open({
                            content: `${data.data}`,
                            skin: 'msg',
                            time: 2,
                        });
                        var time = setTimeout(()=>{
                            that.$router.push({
                                path: '/login',
                            });
                        },2000);
                    }else if(data.status == -2){
                        layer.open({
                            content: `${data.data}`,
                            skin: 'msg',
                            time: 2,
                        });
                        var time = setTimeout(()=>{
                            that.$router.push({
                                path: '/login',
                            });
                        },2000);
                    }else{
                        layer.open({
                            content: `修改文章失败`,
                            skin: 'msg',
                            time: 2,
                        });
                    }
                }
            }



        },
        modform: function (){

            if(!this.title || !this.describe || !this.category_id || !this.creat_time || !this.author || !this.authorid || !this.status || !this.img || !this.flow || !this.content){
                layer.open({
                    content: `请填写完整`,
                    skin: 'msg',
                    time: 2,
                });
                return false;
            }

            var that = this;
            var ajaxargument = "";
            this.content = escape(this.content);
            ajaxargument = `id=${this.id}&title=${this.title}&describe=${this.describe}&category_id=${this.category_id}&article_rank=${this.article_rank}&creat_time=${this.creat_time}&author=${this.author}&authorid=${this.authorid}&status=${this.status}&img=${this.img}&flow=${this.flow}&content=${this.content}&place=${this.place}`;

            var ajax = new XMLHttpRequest();
            ajax.open('post','/node/admin/articlesetmod');
            // ajax.setRequestHeader("Content-type","application/json; charset=utf-8");
            ajax.send(ajaxargument);
            ajax.onreadystatechange = function () {
                if (ajax.readyState==4 &&ajax.status==200) {
                    var data = ajax.responseText;
                    data = myparse(data);
                    console.log(data);//输入相应的内容
                    if(data.status == 1){
                        layer.open({
                            content: `修改文章成功`,
                            skin: 'msg',
                            time: 2,
                        });
                        var time = setTimeout(()=>{
                            that.$router.push({path: '/admin/article'});
                        },300);
                    }else if(data.status == -1){
                        layer.open({
                            content: `${data.data}`,
                            skin: 'msg',
                            time: 2,
                        });
                        var time = setTimeout(()=>{
                            that.$router.push({
                                path: '/login',
                            });
                        },2000);
                    }else if(data.status == -2){
                        layer.open({
                            content: `${data.data}`,
                            skin: 'msg',
                            time: 2,
                        });
                        var time = setTimeout(()=>{
                            that.$router.push({
                                path: '/login',
                            });
                        },2000);
                    }else{
                        layer.open({
                            content: `修改文章失败`,
                            skin: 'msg',
                            time: 2,
                        });
                    }
                }
            }
        },
        changecont:function (content){
            this.content = content;
        },
        fixation:function (){
            document.querySelectorAll(".ql-toolbar")[0].style = "position: fixed;background-color: wheat;top: 60px;z-index: 1000;";
        }
    },
}
</script>

<style>
    .articleadd .flextable li{
        width: 25%;
    }
    .flextable input, .flextable .add{
        width: 90%;
    }
</style>
