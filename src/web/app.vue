<template>
  <div id="app">
    <div class="g-hd">
      <router-view name="hd"></router-view>
    </div>
    <div class="g-bd">
      <router-view name="bd"></router-view>
    </div>
  </div>
</template>

<script>
export default {
    name: 'App'
}
</script>
