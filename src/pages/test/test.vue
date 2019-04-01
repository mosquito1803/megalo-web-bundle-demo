<template>
    <layout class="home-index">
        <div scroll-y
                     enable-back-to-top
                     scroll-with-animation
                     class="home-index--content">
        </div>
        <button @click="selectedIndex = 0">news page</button>
        <button @click="selectedIndex = 1">video page</button>
    </layout>
</template>

<script>
  import layout from '@/components/layout'

  export default {
    name: "HomeIndex",
    components: {
      layout
    },
    data(){
        return {
            selectedIndex: 1
        }
    }
 }
</script>