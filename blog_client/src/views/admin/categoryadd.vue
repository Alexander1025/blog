<template>
    <div class="centerwrap">
        <adminTop :title="htmltitle" :logo="'littlelogo.png'"></adminTop>
        <div class="admindetail">
            <ul class="flextable">
                <li v-for="(item, index) in titlelist">{{item.text}}</li>
            </ul>
            <ul class="flextable">
                <li>
                    <input v-model="categoryid" type="text" placeholder="分类排序categoryid">
                </li>
                <li>
                    <input v-model="name" type="text" placeholder="分类名称">
                </li>
                <li>
                    <input v-model="describe" type="text" placeholder="描述">
                </li>
                <li>
                    <input style="display:none;" type="file" @change="changefile" ref="file">
                    <input v-show="isupload" @click="tapfile" v-model="icon" type="text" placeholder="图标">
                    <img v-show="!isupload" @click="tapfile" :src="iconimg" style="height: 44px;" alt="">
                </li>
                <li>
                    <input v-model="status" type="text" placeholder="状态">
                </li>
            </ul>
            <ul class="flextable flexright">
                <li>
                    <div v-if="isadd" @click="submitform" class="add">添加</div>
                    <div v-if="!isadd" @click="modform" class="add">修改</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {trim,myparse} from './../../static/js/common.js';

import adminTop from '@/components/admintop.vue';

export default {
    data () {
        return {
            id:"",
            name:"",
            describe: "",
            icon:"",
            status:"",
            iconimg:"",
            isupload:true,
            categoryid:"",
            tablecategoryid:"",
            isadd:true,
            htmltitle:"添加文章分类",
            titlelist: [
                {
                    'text':"分类categoryid"
                },
                {
                    'text':"分类名称"
                },
                {
                    'text':"描述"
                },
                {
                    'text':"图标"
                },
                {
                    'text':"状态"
                }
            ]
        }
    },
    props:["getindex"],
    components:{
        adminTop
    },
    mounted: function (){
        this.getindex();

        var url = location.search;
        url = url.replace("?","");
        var query = url.split("&");
        for(var i = 0 ; i <= query.length-1 ; i++){
            var parameter = query[i].split("=")[0];
            if(parameter == "id"){
                this.tablecategoryid = query[i].split("=")[1];
                // console.log(this.tablecategoryid);
                // var that = this;
                var ajaxargument = "";
                ajaxargument = `id=${this.tablecategoryid}`;

                var that = this;

                var ajax = new XMLHttpRequest();
                ajax.open('post','/node/admin/categorygetmod');
                ajax.send(ajaxargument);
                ajax.onreadystatechange = function () {
                    if (ajax.readyState==4 &&ajax.status==200) {
                        var data = ajax.responseText;
                        data = myparse(data);
                        console.log(data);//输入相应的内容
                        if(data.status == 1){
                            layer.open({
                                content: `获取分类成功`,
                                skin: 'msg',
                                time: 2,
                            });

                            that.id = data.data[0].id;
                            that.name = data.data[0].name;
                            that.describe = data.data[0].describe;
                            that.categoryid = data.data[0].categoryid;
                            that.icon = data.data[0].icon;
                            that.status = data.data[0].status;
                            that.iconimg = "/blog_server/upload/"+data.data[0].icon;
                            that.isupload = false;
                            that.isadd = false;

                            that.htmltitle = "修改文章分类   "+data.data[0].id;
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



            }
        }

    },
    methods:{
        changefile: function (e){
            // console.log(e);
            // console.log(this.$refs.file.value);
            // console.log(this.$refs.file.files[0]);
            // console.log(this.$refs.file.files[0].type);
            // console.log(/\//.test(this.$refs.file.files[0].type));
            // console.log(this.$refs.file.files[0].type.split("/")[1]);
            var fileName = this.$refs.file.value.substring(this.$refs.file.value.lastIndexOf(".")+1).toLowerCase();
            if(fileName !="jpg" && fileName !="jpeg" && fileName !="png" && fileName !="gif" ){
                layer.open({
                    content: `只能上传图片，jpg、jpeg、png、gif格式`,
                    skin: 'msg',
                    time: 2,
                });
                this.$refs.file.value = "";
                return false;
            }

            this.isupload = false;

            var imgtype;
            if(/\//.test(this.$refs.file.files[0].type)){
                imgtype = this.$refs.file.files[0].type.split("/")[1];
            }


            var _this = this;
            var reader = new FileReader();//新建一个FileReader
            reader.readAsDataURL(this.$refs.file.files[0]);
            reader.onload = function(){
                console.log(reader.result);
                var that = this;
                var ajaxargument = `img=${reader.result}&imgtype=${imgtype}`;
                var ajax = new XMLHttpRequest();
                ajax.open('post','/node/admin/uploadfile');
                ajax.send(ajaxargument);
                ajax.onreadystatechange = function () {
                    if (ajax.readyState==4 &&ajax.status==200) {
                        var data = ajax.responseText;
                        data = myparse(data);
                        console.log(data);
                        if(data.status == 1){
                            _this.iconimg = "/blog_server/upload/"+data.data;
                            _this.icon = data.data;
                            layer.open({
                                content: `上传图片成功`,
                                skin: 'msg',
                                time: 2,
                            });
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
                                content: `上传图片失败`,
                                skin: 'msg',
                                time: 2,
                            });
                        }
                    }
                };
            }
        },
        submitform: function (){
            console.log(this.name,this.describe,this.status,this.categoryid);

            if(!this.name || !this.describe || !this.status || !this.categoryid){
                layer.open({
                    content: `请填写完整`,
                    skin: 'msg',
                    time: 2,
                });
                return false;
            }

            var that = this;
            var ajaxargument = "";
            if(this.icon != ""){
                ajaxargument = `name=${this.name}&categoryid=${this.categoryid}&describe=${this.describe}&status=${this.status}&icon=${this.icon}`;
            }else if(this.icon == ""){
                ajaxargument = `name=${this.name}&categoryid=${this.categoryid}&describe=${this.describe}&status=${this.status}`;
            }


            var ajax = new XMLHttpRequest();
            ajax.open('post','/node/admin/categoryadd');
            ajax.send(ajaxargument);
            ajax.onreadystatechange = function () {
                if (ajax.readyState==4 &&ajax.status==200) {
                    var data = ajax.responseText;
                    data = myparse(data);
                    console.log(data);//输入相应的内容
                    if(data.status == 1){
                        layer.open({
                            content: `上传分类成功`,
                            skin: 'msg',
                            time: 2,
                        });
                        var time = setTimeout(()=>{
                            that.$router.push({path: '/admin/category'});
                        },2000);
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
                            content: `上传分类失败`,
                            skin: 'msg',
                            time: 2,
                        });
                    }
                }
            }
        },
        modform: function (){
            console.log(this.name,this.describe,this.status);

            if(!this.name || !this.describe || !this.status){
                layer.open({
                    content: `请填写完整`,
                    skin: 'msg',
                    time: 2,
                });
                return false;
            }

            var that = this;
            var ajaxargument = "";
            ajaxargument = `&id=${this.id}&categoryid=${this.categoryid}&name=${this.name}&describe=${this.describe}&status=${this.status}&icon=${this.icon}`;

            var ajax = new XMLHttpRequest();
            ajax.open('post','/node/admin/categorysetmod');
            ajax.send(ajaxargument);
            ajax.onreadystatechange = function () {
                if (ajax.readyState==4 &&ajax.status==200) {
                    var data = ajax.responseText;
                    data = myparse(data);
                    console.log(data);//输入相应的内容
                    if(data.status == 1){
                        layer.open({
                            content: `修改分类成功`,
                            skin: 'msg',
                            time: 2,
                        });
                        var time = setTimeout(()=>{
                            that.$router.push({path: '/admin/category'});
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
                            content: `修改分类失败`,
                            skin: 'msg',
                            time: 2,
                        });
                    }
                }
            }
        },
        tapfile: function (){
            this.$refs.file.click();
        }
    }
}
</script>

<style>
    .flextable li{
        flex: 0 1 20%;
    }
</style>
