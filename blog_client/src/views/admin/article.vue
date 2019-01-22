<template>
    <div class="centerwrap">
        <adminTop :title="'文章列表'" :logo="'littlelogo.png'"></adminTop>
        <div class="admindetail">
            <ul class="flextable">
                <li v-for="(item, index) in titlelist">{{item.text}}</li>
            </ul>
            <ul class="flextable" v-for="(item, index) in articlelist">
                <li>
                    <input :value="item.id" type="text" placeholder="编号" readonly>
                </li>
                <li>
                    <input :value="item.title" type="text" placeholder="文章名称">
                </li>
                <li>
                    <input :value="item.article_rank" type="text" placeholder="文章排序">
                </li>
                <li>
                    <input :value="item.category_id" type="text" placeholder="分类id">
                </li>
                <li>
                    <img :src='"/blog_server/myupload/"+item.img' style="height: 44px;" alt="">
                </li>
                <li>
                    <input :value="item.status==1 ? '正在启用' : '已停用'" type="text" placeholder="状态">
                </li>
                <li>
                    <a @click="skip(item.id)" class="modification" href="javascript:void(0);">修改</a>
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
            titlelist: [
                {
                    'text':"编号"
                },
                {
                    'text':"文章名称"
                },
                {
                    'text':"排序"
                },
                {
                    'text':"分类id"
                },
                {
                    'text':"封面"
                },
                {
                    'text':"状态"
                },
                {
                    'text':"操作"
                }
            ],
            articlelist:[

            ]
        }
    },
    props:["getindex"],
    components:{
        adminTop,
    },
    mounted: function (){
        this.getindex();

        var that = this;
        var ajaxargument = "";

        var ajax = new XMLHttpRequest();
        ajax.open('post','/node/admin/articleget');
        ajax.send(ajaxargument);
        ajax.onreadystatechange = function () {
            if (ajax.readyState==4 &&ajax.status==200) {
                var data = ajax.responseText;
                data = myparse(data);
                // console.log(data);//输入相应的内容
                if(data.status == 1){
                    that.articlelist = data.data;
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
    },
    methods:{
        skip: function (id){
            this.$router.push({
                path: '/admin/addarticle',
                query: {
                    id: id,
                }
            });
        }
    }
}
</script>

<style>
    .flextable li {
        width: 14.285%;
    }
</style>
