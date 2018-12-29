<template>
    <div class="indexwrap">
        <div class="mainwrap mainbody">
            <div class="bodypart">

                <div class="areawrap" v-for="(item, index) in articlemodule">
                    <cutline :title="item.title" :logo="'logo.png'"></cutline>
                    <div class="articlearea">
                        <commonarticle
                            v-for="(item1, index1) in item.article"
                            :id="item1.id"
                            :tag="item1.tag"
                            :title="item1.title"
                            :desc="item1.desc"
                            :author="item1.author"
                            :date="item1.date"
                            :quantity="item1.quantity"
                            :img="item1.img"
                            :key="item1.id"
                            :color="item1.color"
                        />
                    </div>
                </div>

            </div>
            <div class="bodyside">
                <div class="areawrap">
                    <cutline :title="'快讯'" :logo="'littlelogo.png'"></cutline>
                </div>
                <div class="areawrap">
                    <cutline :title="'分类目录'" :logo="'littlelogo.png'"></cutline>
                    <categorylist
                        :categorylistarr="categorylistarr"
                    ></categorylist>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import cutline from '@/components/cutline.vue';
import commonarticle from '@/components/commonarticle.vue';
import categorylist from '@/components/categorylist.vue';


export default {
    data () {
        return {

        }
    },
    props:["articlemodule","categorylistarr"],
    components:{
        cutline,
        commonarticle,
        categorylist,
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
