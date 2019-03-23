<template>
  <div id="app">
    <div class="g-hd">
      <router-view name="hd"/>
    </div>
    <div class="g-bd">
      <router-view name="bd"/>
    </div>
  </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
.g-hd{position:fixed;top:0;left:0;width:100%;height:1rem;}
.g-bd{margin-top:1rem;}
</style>
