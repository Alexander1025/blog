<template>
    <div class="comment">
        <div class="commenttop">
            <img src="./../static/images/icon/comment1_green.png" alt="">
            <span>
                评论区
            </span>
            <img src="./../static/images/icon/comment1_green.png" alt="">
        </div>
        <div class="commentarea">
            <div class="commentlist" v-for="(item, index) in commentlist">
                <div class="commentimg">
                    <img :src="item.img" alt="">
                </div>
                <div class="commentcont">
                    <span>
                        {{item.author}}
                    </span>
                    <var>
                        {{item.createtime}}
                    </var>
                    <div class="cont">
                        {{item.cont}}
                    </div>
                </div>
            </div>
        </div>
        <br><br><br>
        <div class="commenttop">
            <img src="./../static/images/icon/comment2_red.png" alt="">
            <span>
                留下评论
            </span>
            <img src="./../static/images/icon/comment2_red.png" alt="">
        </div>
        <div class="commentmain">
            <div class="messagetop">
                <input @click="trancolor(0)" :class="{ active: activeindex === 0 ? true : false }" v-model="author" type="text" placeholder="昵称">
                <input @click="trancolor(1)" :class="{ active: activeindex === 1 ? true : false }" v-model="email" type="text" placeholder="邮箱">
                <input @click="trancolor(2)" :class="{ active: activeindex === 2 ? true : false }" v-model="url" type="text" placeholder="个人网址(http://)">
            </div>
            <div class="edit">
                <textarea @click="trancolor(3)" :class="{ active: activeindex === 3 ? true : false }" v-model="cont" placeholder="正确填写邮箱, 才能及时收到回复哦♪(^∇^*)">
                </textarea>
                <div @click="submit" class="submitcomment">
                    提交
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {trim,myparse} from './../static/js/common.js';

export default {
    data () {
        return {
            author:"",
            email:"",
            cont:"",
            url:"",
            activeindex:"",
        }
    },
    props:['commentlist','getgetcomment'],
    mounted:function (){

    },
    methods:{
        trancolor:function (index){
            this.activeindex = index;
        },
        submit:function (){
            var url = location.search;
            url = url.replace("?","");
            var query = url.split("&");
            for(var i = 0 ; i <= query.length-1 ; i++){
                var parameter = query[i].split("=")[0];
                if(parameter == "articleid"){
                    console.log(query[i].split("=")[1]);

                    var that = this;

                    // 用于提交评论
                    var ajaxargument2 = `articleid=${query[i].split("=")[1]}&author=${that.author}&email=${that.email}&cont=${that.cont}&createtime=${new Date().getTime()}`;
                    var ajax2 = new XMLHttpRequest();
                    ajax2.open('post','/node/index/submitcomment');
                    ajax2.send(ajaxargument2);
                    ajax2.onreadystatechange = function () {
                        if (ajax2.readyState==4 &&ajax2.status==200) {
                            var data = ajax2.responseText;
                            data = myparse(data);
                            // console.log(data);//输入相应的内容
                            if(data.status == 1){
                                that.author="";
                                that.email="";
                                that.cont="";
                                that.url="";
                                that.activeindex="";
                                layer.open({
                                    content: `评论已提交`,
                                    skin: 'msg',
                                    time: 2,
                                });
                                that.$emit("getgetcomment");
                            }else{
                                layer.open({
                                    content: `评论提交出错`,
                                    skin: 'msg',
                                    time: 2,
                                });
                            }
                        }
                    }
                }
            }
        }
    }
}
</script>

<style>
    body {
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
