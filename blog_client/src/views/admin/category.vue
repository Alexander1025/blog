<template>
    <div class="centerwrap">
        <adminTop :title="'添加文章分类'" :logo="'littlelogo.png'"></adminTop>
        <div class="admindetail">
            <ul class="flextable">
                <li v-for="(item, index) in titlelist">{{item.text}}</li>
            </ul>
            <ul>
                <li>

                </li>
                <li>

                </li>
                <li>

                </li>
                <li>

                </li>
                <li>

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

    }
}
</script>

<style>

</style>
