<template>
  <div class="demo">
    <ul class="area-content--tab">
      <li class="area-content--tabItem active">按钮</li>
    </ul>
    <div class="area">
      <p class="area-title">类型</p>
      <div class="area-content">
        <button type="default" size="normal">线框按钮</button>
        <button type="primary" size="normal">色块按钮</button>
        <button type="special" size="medium">特殊按钮</button>
      </div>
    </div>
    <div class="area">
      <p class="area-title">禁用状态</p>
      <div class="area-content">
        <button type="default" size="normal" disabled>线框按钮</button>
        <button type="primary" size="normal" disabled>色块按钮</button>
        <button type="special" size="medium" disabled>特殊按钮</button>
      </div>
    </div>
    <div class="area">
      <p class="area-title">按钮形状</p>
      <div class="area-content">
        <button type="default" size="normal" radius="round">圆角按钮</button>
        <button type="primary" size="normal" radius="round">圆角按钮</button>
        <button type="special" size="medium" radius="round">圆角按钮</button>
      </div>
      <div class="area-content">
        <button type="default" size="normal" radius="square">方形按钮</button>
        <button type="primary" size="normal" radius="square">方形按钮</button>
        <button type="special" size="medium" radius="square">方形按钮</button>
      </div>
    </div>
    <div class="area areasize">
      <p class="area-title">按钮尺寸</p>
      <div class="area-content">
        <button type="default" size="normal">普通按钮</button>
        <button type="primary" size="normal">普通按钮</button>
        <button type="special" size="medium">特殊按钮</button>
        <button type="primary" size="large">大号按钮</button>
        <button type="primary" size="block" radius="square">全屏按钮</button>
      </div>
    </div>
    <div class="area areasize">
      <p class="area-title">带icon按钮</p>
      <div class="area-content">
        <button type="default" size="normal" icon="cart">线框按钮</button>
        <button type="primary" size="normal" icon="cart">色块按钮</button>
        <button type="special" size="medium" icon="cart">特殊按钮</button>
        <button type="primary" size="large" icon="cart">大号按钮</button>
        <button type="primary" size="block" radius="square" icon="cart">全屏按钮</button>
      </div>
    </div>
    <div class="area areasize">
      <p class="area-title">字数限制</p>
      <div class="area-content">
        <button type="default" size="normal" icon="cart">线框按钮线框按钮</button>
        <button type="default" size="normal" >线框按钮线框按钮</button>
        <button type="primary" size="normal" icon="cart">色块按钮色块按钮</button>
        <button type="primary" size="normal" >色块按钮色块按钮</button>
        <button type="special" size="medium" icon="cart">特殊按钮特殊按钮特殊按钮特殊按钮特殊按钮特殊按钮</button>
        <button type="special" size="medium" >特殊按钮特殊按钮特殊按钮特殊按钮特殊按钮特殊按钮特殊按钮特殊按钮特殊按钮特殊按钮特殊按钮特殊按钮</button>
        <button type="primary" size="large" icon="cart">大号按钮大号按钮</button>
        <button type="primary" size="large">大号按钮大号按钮</button>
        <button class="ml" type="primary" size="block" radius="square" icon="cart">全屏按钮全屏按钮</button>
        <button type="primary" size="block" radius="square">全屏按钮全屏按钮</button>
      </div>
    </div>
       <div class="area">
      <p class="area-title">API</p>
      <div class="area-content">
        <ul class="area-content--table">
          <li class="area-content--itemTab">
            <div class="area-content--tabHead">参数</div>
            <div class="area-content--tabHead">说明</div>
            <div class="area-content--tabHead">类型</div>
            <div class="area-content--tabHead">默认值</div>
          </li>
          <li class="area-content--itemTab">
            <div class="area-content--desc">type</div>
            <div class="area-content--desc">内置button名称</div>
            <div class="area-content--desc">String</div>
            <div class="area-content--desc">default</div>
          </li>
          <li class="area-content--itemTab">
            <div class="area-content--desc">radius</div>
            <div class="area-content--desc">内置button形状</div>
            <div class="area-content--desc">String</div>
            <div class="area-content--desc">round</div>
          </li>
          <li class="area-content--itemTab">
            <div class="area-content--desc">disabled</div>
            <div class="area-content--desc">内置button状态</div>
            <div class="area-content--desc">String</div>
            <div class="area-content--desc">-</div>
          </li>
          <li class="area-content--itemTab">
            <div class="area-content--desc">size</div>
            <div class="area-content--desc">内置button尺寸</div>
            <div class="area-content--desc">String</div>
            <div class="area-content--desc">normal</div>
          </li>
        </ul>
      </div>
    </div>

    <!-- <div class="area">
      <p class="area-title">sku</p>
      <div class="area-content">
        <button type="sku" selected>sku按钮</button>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class App extends Vue {

}
</script>

<style lang="scss">
ul,li,p,div,span,body,html{
  margin: 0;
  padding: 0;
}
.demo{
  margin-bottom: 1rem;
}
.area {
  margin: 0 .2rem .3rem;
}
.areasize{
  margin: 0;
  .area-title{
    margin: .25rem .2rem;
  }
  .area-content{
    button{
      &:first-child{
        margin-left: .2rem;
      }
      &:last-child{
        margin-left: 0;
      }
      &.ml{
        margin-left: 0;
      }
    }
  }
}
.area-content{
  // height: 1rem;
  font-size: 0;
  &--tab{
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    font-size: 22px;
    width: 100%;
    line-height: 44px;
    border-top: 1px solid #ebedf0;
    border-bottom: 1px solid #ebedf0;
  }
  &--tabItem{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    padding: 0 5px;
    position: relative;
    color: #333333;
    line-height: 50px;
    text-align: center;
    box-sizing: border-box;
    list-style: none;
  }
    &--table{
    margin: .2rem auto;
    font-size: .24rem;
    color: #666;
  }
   &--tabHead{
     background: #f1f4f8;
   }
  &--tabHead,&--desc{
    display: inline-block;
    width: 25%;
  }
  &--itemTab{
    // display: table;
    // width: 25%;
    // float: left;
    //padding: .2rem;
    line-height: .6rem;
    border-bottom: 1px solid #ebedf0;
    &:first-child{
      border-bottom: none;
    }
  }
}
.area-title {
  font-size: .32rem;
  margin: .25rem 0;
  color: #666;
}
button.ui-button{
  margin-bottom: .2rem;
}
.ui-button--block {
  margin-bottom: 10px!important;
}
</style>
