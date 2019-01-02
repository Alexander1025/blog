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

    }
}
</script>

<style>

</style>
