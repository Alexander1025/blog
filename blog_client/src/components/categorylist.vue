<template>
    <div class="categorylist">
        <a
            v-for="(item, index) in categorylistarr"
            @click="skip(item.id)"
            href="javascript:void(0);"
        >
            {{item.name}}
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

    },
    methods:{
        skip: function (id){
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            this.$router.push({
                path: '/category',
                query: {
                    categoryid: id,
                }
            });
        }
    }
}
</script>

<style>
    body {
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
