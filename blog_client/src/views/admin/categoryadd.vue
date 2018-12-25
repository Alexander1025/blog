<template>
    <div class="centerwrap">
        <adminTop :title="'添加文章分类'" :logo="'littlelogo.png'"></adminTop>
        <div class="admindetail">
            <ul class="flextable">
                <li v-for="(item, index) in titlelist">{{item.text}}</li>
            </ul>
            <ul class="flextable">
                <li>
                    <input type="text" placeholder="编号" readonly>
                </li>
                <li>
                    <input v-model="name" type="text" placeholder="分类名称">
                </li>
                <li>
                    <input v-model="describe" type="text" placeholder="描述">
                </li>
                <li>
                    <input type="file" @change="changefile" ref="file">
                    <input type="text" placeholder="图标">
                </li>
                <li>
                    <input v-model="status" type="text" placeholder="状态">
                </li>
            </ul>
            <ul class="flextable flexright">
                <li>
                    <div @click="submitform" class="add">add</div>
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
            name:"",
            describe: "",
            status:"",
            titlelist: [
                {
                    'text':"编号"
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
    components:{
        adminTop
    },
    mounted: function (){

    },
    methods:{
        changefile: function (e){
            console.log(e);
            console.log(this.$refs.file.value);
            console.log(this.$refs.file.files[0]);
            var _this = this;
            var reader = new FileReader();//新建一个FileReader
            reader.readAsDataURL(this.$refs.file.files[0]);
            reader.onload = function(){
                console.log(reader.result);
                var that = this;
                var ajaxargument = "";
                var ajax = new XMLHttpRequest();
                ajax.open('post','/node/admin/uploadfile');
                ajax.send(ajaxargument);
                ajax.onreadystatechange = function () {
                    if (ajax.readyState==4 &&ajax.status==200) {
                        var data = ajax.responseText;
                        data = myparse(data);
                        console.log(data);
                    }
                };
            }
        },
        submitform: function (){
            console.log(this.name,this.describe,this.status);

            if(!this.name && !this.describe && !this.status){
                layer.open({
                    content: `请填写完整`,
                    skin: 'msg',
                    time: 2,
                });
                return false;
            }

            var that = this;
            var ajaxargument = "";
            ajaxargument = `name=${this.name}&describe=${this.describe}&status=${this.status}`;

            var ajax = new XMLHttpRequest();
            ajax.open('post','/node/admin/categoryadd');
            ajax.send(ajaxargument);
            ajax.onreadystatechange = function () {
                if (ajax.readyState==4 &&ajax.status==200) {
                    var data = ajax.responseText;
                    data = myparse(data);
                    console.log(data);//输入相应的内容
                    if(data.status == 1){
                        // layer.open({
                        //     content: `${data.data[0].username},欢迎回来`,
                        //     skin: 'msg',
                        //     time: 2,
                        // });
                    }else{
                        // layer.open({
                        //     content: `账号或密码错误，请重新输入`,
                        //     skin: 'msg',
                        //     time: 2,
                        // });
                    }
                }
            }
        }
    }
}
</script>

<style>
    .flextable li{
        flex: 0 1 20%;
    }
</style>
