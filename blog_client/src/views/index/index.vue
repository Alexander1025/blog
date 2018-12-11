<template>
    <div class="indexwrap">
        <commonHead></commonHead>
        <indexTop></indexTop>
    </div>
</template>

<script>
import indexTop from '@/components/indextop.vue';
import commonHead from '@/components/commonhead.vue';



export default {
    data () {
        return {
            message: ''
        }
    },
    components:{
        indexTop,
        commonHead,
    },
    mounted:function (){

    }
}
</script>

<style>

</style>
