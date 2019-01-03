<template>
    <div class="indexwrap indextop">
        <div class="mainwrap">
            <div class="featured">
                <commonarticle
                    v-for="(item, index) in featured"
                    :id="item.id"
                    :tag="item.tag"
                    :title="item.title"
                    :desc="item.desc"
                    :author="item.author"
                    :date="item.date"
                    :quantity="item.quantity"
                    :img="item.img"
                    :key="item.id"
                    :color="item.color"
                />
            </div>
            <div class="recommend">
                <commonarticle
                    v-for="(item, index) in recommend"
                    :id="item.id"
                    :tag="item.tag"
                    :title="item.title"
                    :desc="item.desc"
                    :author="item.author"
                    :date="item.date"
                    :quantity="item.quantity"
                    :img="item.img"
                    :key="item.id"
                    :color="item.color"
                />
            </div>
        </div>
    </div>
</template>

<script>
import commonarticle from '@/components/commonarticle.vue';

export default {
    data () {
        return {

        }
    },
    props:["featured","recommend"],
    components:{
        commonarticle
    },
    mounted:function (){

    }
}
</script>

<style>
    body {
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
