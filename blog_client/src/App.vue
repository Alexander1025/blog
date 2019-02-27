<template>
  <div id="app">
    <keep-alive>
        <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import layer from '@/static/js/layer.js'

import '@/static/css/layer.css';
import '@/static/css/common.css';

export default {
  name: 'blog'
}
</script>

<style>

</style>
