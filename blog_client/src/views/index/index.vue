<template>
    <div class="indexwrap">
        <commonHead></commonHead>
        <indexTop></indexTop>
        <commonFoot></commonFoot>
    </div>
</template>

<script>
import indexTop from '@/components/indextop.vue';
import commonHead from '@/components/commonhead.vue';
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
        commonFoot,
    },
    mounted:function (){

    }
}
</script>

<style>

</style>
