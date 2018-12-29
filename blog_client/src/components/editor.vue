<template>
    <div id="app">
        <vue-editor v-model="thiscontent"></vue-editor>
    </div>
 </template>

 <script>
import { VueEditor } from 'vue2-editor'

export default {

    components: {
        VueEditor
    },
    props:["content"],
    data() {
        return {
            thiscontent:this.content
        }
    },
    mounted:function (){

    },
    watch:{
        thiscontent:function (){
            this.$emit('changecont',this.thiscontent);
            // this.content = this.thiscontent;
        },
        content:function (){
            this.thiscontent = this.content;
        }
    }
}
 </script>
