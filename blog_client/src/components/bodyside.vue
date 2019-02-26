<template>
    <div class="bodyside">
        
        <div class="areawrap">
            <cutline :title="'一周音乐'" :logo="'littlelogo.png'"></cutline>
            <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=280 height=86 src="https://music.163.com/outchain/player?type=2&id=1308828278&auto=1&height=66"></iframe>
        </div>
        <div class="areawrap">
            <cutline :title="'分类目录'" :logo="'littlelogo.png'"></cutline>
            <categorylist
                :categorylistarr="categorylistarr"
            ></categorylist>
        </div>
        <div class="areawrap">
            <cutline :title="'快讯'" :logo="'littlelogo.png'"></cutline>
        </div>
    </div>
</template>

<script>
import cutline from '@/components/cutline.vue';
import categorylist from '@/components/categorylist.vue';

export default {
    data () {
        return {

        }
    },
    components:{
        cutline,
        categorylist,
    },
    props:['categorylistarr'],
    mounted:function (){
        
    },
}
</script>

<style>
    body {
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
