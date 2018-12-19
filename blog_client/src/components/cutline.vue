<template>
    <div class="cutline">
        <img class="cutlineimg" :src="`./../static/images/common/${logo}`" alt="机智僧">
        <span>{{title}}</span>
    </div>
</template>

<script>


export default {
    data () {
        return {

        }
    },
    props:['title','logo'],
    mounted:function (){

    }
}
</script>

<style>
    body {
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
