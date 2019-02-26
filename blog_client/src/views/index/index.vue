<template>
    <div class="indexwrap">
        <commonHead></commonHead>
        <indexTop
            :featured="$store.state.featured"
            :recommend="$store.state.recommend"
        ></indexTop>
        <indexMain
            :articlemodule="$store.state.articlemodule"
            :categorylistarr="$store.state.categorylistarr"
        ></indexMain>
        <commonFoot></commonFoot>
    </div>
</template>

<script>
import {trim,myparse} from './../../static/js/common.js';


import indexTop from '@/components/indextop.vue';
import commonHead from '@/components/commonhead.vue';
import indexMain from '@/components/indexMain.vue';
import commonFoot from '@/components/commonFoot.vue';


export default {
    data () {
        return {
            message: '',
        }
    },
    components:{
        indexTop,
        commonHead,
        indexMain,
        commonFoot,
    },
    mounted:function (){

        // 这里就是 getarticle，一样的！！！！！！！！！！！！
        // this.$store.commit('setState',{attr:'test',field:"hello"});
        if(this.$store.state.featured.length == 0 || this.$store.state.articlemodule.length == 0){

            var that = this;

            // 用于获取文章分类列表信息
            var ajaxargument = "";
            var ajax = new XMLHttpRequest();
            ajax.open('post','/node/index/categorylistget');
            ajax.send(ajaxargument);
            ajax.onreadystatechange = function () {
                if (ajax.readyState==4 &&ajax.status==200) {
                    var data = ajax.responseText;
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




            // 用于获取头部文章列表信息
            var ajaxargument1 = "";
            var ajax1 = new XMLHttpRequest();
            ajax1.open('post','/node/index/indextoplistget');
            ajax1.send(ajaxargument1);
            ajax1.onreadystatechange = function () {
                if (ajax1.readyState==4 &&ajax1.status==200) {
                    var data1 = ajax1.responseText;
                    data1 = myparse(data1);
                    // console.log(data1);//输入相应的内容
                    if(data1.status == 1){

                        that.$store.commit('setState',{attr:'featured',field:data1.data.featured});
                        that.$store.commit('setState',{attr:'recommend',field:data1.data.recommend});

                    }else{
                        layer.open({
                            content: `获取文章列表失败`,
                            skin: 'msg',
                            time: 2,
                        });
                    }
                }
            }




            // 用于获取中部文章列表信息
            var ajaxargument2 = "";
            var ajax2 = new XMLHttpRequest();
            ajax2.open('post','/node/index/articlemodule');
            ajax2.send(ajaxargument2);
            ajax2.onreadystatechange = function () {
                if (ajax2.readyState==4 &&ajax2.status==200) {
                    var data = ajax2.responseText;
                    data = myparse(data);
                    // console.log(data);//输入相应的内容
                    if(data.status == 1){
                        that.$store.commit('setState',{attr:'articlemodule',field:data.data.article});
                    }else{
                        layer.open({
                            content: `获取文章列表失败`,
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
