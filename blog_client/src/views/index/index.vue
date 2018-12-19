<template>
    <div class="indexwrap">
        <commonHead></commonHead>
        <indexTop></indexTop>
        <indexMain></indexMain>
        <commonFoot></commonFoot>
    </div>
</template>

<script>
import indexTop from '@/components/indextop.vue';
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
        indexTop,
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
