<template>
    <div class="indexwrap indextop">
        <div class="mainwrap">
            <div class="featured">
                <commonarticle
                    :id="1"
                    :tag="10"
                    :title="'欢迎来到机智僧的博客'"
                    :desc="'这里是机智僧的博客,欢迎大家常来博客打卡 ^_^'"
                    :author="'机智僧'"
                    :date="'2018-10-1'"
                    :quantity="'168'"
                    :img="'indextop.jpg'"
                />
            </div>
            <div class="recommend">
                <commonarticle
                    :id="1"
                    :tag="10"
                    :title="'欢迎来到机智僧的博客'"
                    :desc="'这里是机智僧的博客,欢迎大家常来博客打卡 ^_^'"
                    :author="'机智僧'"
                    :date="'2018-10-1'"
                    :quantity="'168'"
                    :img="'indextop.jpg'"
                />
                <commonarticle
                    :id="1"
                    :tag="10"
                    :title="'欢迎来到机智僧的博客'"
                    :desc="'这里是机智僧的博客,欢迎大家常来博客打卡 ^_^'"
                    :author="'机智僧'"
                    :date="'2018-10-1'"
                    :quantity="'168'"
                    :img="'indextop.jpg'"
                />
                <commonarticle
                    :id="1"
                    :tag="10"
                    :title="'欢迎来到机智僧的博客'"
                    :desc="'这里是机智僧的博客,欢迎大家常来博客打卡 ^_^'"
                    :author="'机智僧'"
                    :date="'2018-10-1'"
                    :quantity="'168'"
                    :img="'indextop.jpg'"
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
