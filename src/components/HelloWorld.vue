<template>
  <div class="hello">
    <h1 :style="'color:'+color">{{ msg }}</h1>
    <div class="testStyle">123</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        'color': String,
        'msg': {
            default: 'Welcome to Megalo'
        }
    },
    data() {
        return {
            test: 123
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .testStyle {
        color: #f00;
    }
    .test2 {
        color: #00f;
    }
    .hello{
        font-size: 16px;
        text-align: center;
    }
</style>
