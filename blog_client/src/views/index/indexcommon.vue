<template>
    <div class="indexwrap">
        <commonHead></commonHead>
            <router-view/>
        <commonFoot></commonFoot>
    </div>
</template>

<script>
import {trim,myparse} from './../../static/js/common.js';

import commonHead from '@/components/commonhead.vue';
import commonFoot from '@/components/commonFoot.vue';

export default {
    data () {
        return {
            message: '',
        }
    },
    components:{
        commonHead,
        commonFoot,
    },
    mounted:function (){

    }
}
</script>

<style>

</style>
