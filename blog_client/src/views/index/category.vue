<template>
    <div class="indexwrap">
        <commonHead></commonHead>
        <indexMain
            :articlemodule="$store.state.articlemodule"
            :categorylistarr="$store.state.categorylistarr"
        ></indexMain>
        <commonFoot></commonFoot>
    </div>
</template>

<script>
import commonHead from '@/components/commonhead.vue';
import indexMain from '@/components/indexMain.vue';
import commonFoot from '@/components/commonFoot.vue';


export default {
    data () {
        return {
            message: ''
        }
    },
    components:{
        commonHead,
        indexMain,
        commonFoot,
    },
    mounted:function (){
        // if(this.$store.state.articlecategorymodule.length == 0){


        //     var url = location.search;
        //     url = url.replace("?","");
        //     var query = url.split("&");
        //     for(var i = 0 ; i <= query.length-1 ; i++){
        //         var parameter = query[i].split("=")[0];
        //         if(parameter == "categoryid"){
        //             for(var j = 0 ; j <= this.$store.state.articlemodule.length-1 ; j++){
        //                 if(this.$store.state.articlemodule[j]['category'] == query[i].split("=")[1]){
        //                     console.log("asdasd");
        //                     console.log(this.$store.state.articlemodule[j]);
        //                     this.$store.commit('setState',{attr:'articlecategorymodule',field:this.$store.state.articlemodule[j]});
        //                 }
        //             }
        //         }
        //     }
        // }
    }
}
</script>

<style>

</style>
