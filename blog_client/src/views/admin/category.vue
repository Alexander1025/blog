<template>
    <div class="centerwrap">
        <adminTop :title="'文章分类列表'" :logo="'littlelogo.png'"></adminTop>
        <div class="admindetail">
            <ul class="flextable">
                <li v-for="(item, index) in titlelist">{{item.text}}</li>
            </ul>
            <ul class="flextable" v-for="(item, index) in categorylist">
                <li>
                    <input :value="item.id" type="text" placeholder="编号" readonly>
                </li>
                <li>
                    <input :value="item.name" type="text" placeholder="分类名称">
                </li>
                <li>
                    <input :value="item.describe" type="text" placeholder="描述">
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
                },
                {
                    'text':"操作"
                }
            ],
            categorylist:[

            ]
        }
    },
    components:{
        adminTop
    },
    mounted: function (){
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
                    test: 'test',
                    test1: 'test1'
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
