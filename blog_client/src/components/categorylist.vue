<template>
    <div class="categorylist">
        <a href="javascript:void(0);" v-for="(item, index) in categorylistarr">
            {{item.text}}
        </a>
    </div>
</template>

<script>


export default {
    data () {
        return {

        }
    },
    props:["categorylistarr"],
    mounted:function (){

    }
}
</script>

<style>
    body {
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
