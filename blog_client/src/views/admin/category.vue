<template>
    <div class="centerwrap">
        <adminTop :title="'文章分类列表'" :logo="'littlelogo.png'"></adminTop>
        <div class="admindetail">
            <ul class="flextable">
                <li v-for="(item, index) in titlelist">{{item.text}}</li>
            </ul>
            <ul class="flextable" v-for="(item, index) in categorylist">
                <li>
                    <input :value="item.categoryid" type="text" placeholder="分类categoryid">
                </li>
                <li>
                    <input :value="item.name" type="text" placeholder="分类名称">
                </li>
                <li>
                    <input :value="item.id" type="text" placeholder="编号id" readonly>
                </li>
                <li>
                    <img :src='"/blog_server/upload/"+item.icon' style="height: 44px;" alt="">
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
                    'text':"分类排序categoryid"
                },
                {
                    'text':"分类名称"
                },
                {
                    'text':"编号id"
                },
                {
                    'text':"图标"
                },
                {
                    'text':"状态"
                },
                {
                    'text':"操作"
                }
            ],
            categorylist:[

            ]
        }
    },
    props:["getindex"],
    components:{
        adminTop
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
    },
    methods:{
        skip: function (id){
            this.$router.push({
                path: '/admin/addcategory',
                query: {
                    id: id,
                }
            });
        }
    }
}
</script>

<style>
    .flextable li{
        width: 16.666%;
    }
</style>
