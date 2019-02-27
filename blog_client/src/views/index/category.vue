<template>
    <div>
        <indexMain
            :articlemodule="$store.state.articlecategorymodule"
            :categorylistarr="$store.state.categorylistarr"
        ></indexMain>
    </div>
</template>

<script>
import {trim,myparse} from './../../static/js/common.js';

import indexMain from '@/components/indexMain.vue';


export default {
    data () {
        return {
            message: ''
        }
    },
    components:{
        indexMain,
    },
    mounted:function (){
        var url = location.search;
        url = url.replace("?","");
        var query = url.split("&");
        for(var i = 0 ; i <= query.length-1 ; i++){
            var parameter = query[i].split("=")[0];
            if(parameter == "categoryid"){
                this.getarticle(query[i].split("=")[1]);
            }
        }
    },
    beforeRouteUpdate (to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        this.getarticle(to.query.categoryid);
        // console.log('to: ', to.query.categoryid);
        // console.log('from: ', from.query.categoryid);
        next();
    },
    methods:{
        getarticle:function (categoryid){
            if(this.$store.state.articlecategorymodule.length == 0){
                if(this.$store.state.articlemodule.length == 0){
                    // 这里要全部请求一遍
                    this.getallarticle(categoryid);
                }else if(this.$store.state.articlemodule.length != 0){
                    // 这里直接拿articlemodule的数据
                    for(var j = 0 ; j <= this.$store.state.articlemodule.length-1 ; j++){
                        if(this.$store.state.articlemodule[j]['category'] == categoryid){
                            var newArr = [];
                            newArr.push(this.$store.state.articlemodule[j]);
                            this.$store.commit('setState',{attr:'articlecategorymodule',field:newArr});
                        }
                    }
                }
            }else if(this.$store.state.articlecategorymodule[0]['category'] != categoryid){
                if(this.$store.state.articlemodule.length == 0){
                    // 这里要全部请求一遍
                    this.getallarticle(categoryid);
                }else if(this.$store.state.articlemodule.length != 0){
                    // 这里直接拿articlemodule的数据
                    for(var p = 0 ; p <= this.$store.state.articlemodule.length-1 ; p++){
                        if(this.$store.state.articlemodule[p]['category'] == categoryid){
                            var newArr = [];
                            newArr.push(this.$store.state.articlemodule[p]);
                            this.$store.commit('setState',{attr:'articlecategorymodule',field:newArr});
                        }
                    }
                }
            }
        },
        getallarticle:function (categoryid){
            console.log('categoryid: ', categoryid);

            var that = this;

            // 用于获取文章列表信息
            var ajaxargument = `categoryid=${categoryid}`;
            var ajax = new XMLHttpRequest();
            ajax.open('post','/node/index/articlecategoryget');
            ajax.send(ajaxargument);
            ajax.onreadystatechange = function () {
                if (ajax.readyState==4 &&ajax.status==200) {
                    var data = ajax.responseText;
                    data = myparse(data);
                    // console.log(data);//输入相应的内容
                    if(data.status == 1){
                        that.$store.commit('setState',{attr:'articlecategorymodule',field:data.data.articlecategorymodule});
                    }else{
                        layer.open({
                            content: `获取文章分类失败`,
                            skin: 'msg',
                            time: 2,
                        });
                    }
                }
            }


            // 用于获取文章分类列表信息
            var ajaxargument1 = "";
            var ajax1 = new XMLHttpRequest();
            ajax1.open('post','/node/index/categorylistget');
            ajax1.send(ajaxargument1);
            ajax1.onreadystatechange = function () {
                if (ajax1.readyState==4 &&ajax1.status==200) {
                    var data = ajax1.responseText;
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

        }
    }
}
</script>

<style>

</style>
