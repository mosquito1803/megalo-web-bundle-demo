<template>
  <div class="g-bd">
    <div class="demo">
      <div class="area normal">
        <p class="area-title">类型</p>
        <div class="area-content">
          <UiButton type="default">线框按钮</UiButton>
          <UiButton type="primary">色块按钮</UiButton>
        </div>
        <div class="area-content">
          <UiButton type="special">特殊按钮</UiButton>
        </div>
      </div>
      <div class="area normal">
        <p class="area-title">禁用状态</p>
        <div class="area-content">
          <UiButton type="default" disabled>线框按钮</UiButton>
          <UiButton type="primary" disabled>色块按钮</UiButton>
        </div>
        <div class="area-content">
          <UiButton type="special" disabled>特殊按钮</UiButton>
        </div>
      </div>
      <div class="area normal">
        <p class="area-title">按钮形状</p>
        <div class="area-content">
          <UiButton type="default">圆角按钮</UiButton>
          <UiButton type="primary">圆角按钮</UiButton>
        </div>
        <div class="area-content">
          <UiButton type="special">圆角按钮</UiButton>
        </div>
        <div class="area-content">
          <UiButton type="default" radius="square">方形按钮</UiButton>
          <UiButton type="primary" radius="square">方形按钮</UiButton>
        </div>
        <div class="area-content">
          <UiButton type="special" radius="square">方形按钮</UiButton>
        </div>
      </div>
      <div class="area normal">
        <p class="area-title">按钮尺寸</p>
        <div class="area-content">
          <UiButton type="default">普通按钮</UiButton>
          <UiButton type="primary">普通按钮</UiButton>
        </div>
        <div class="area-content">
          <UiButton type="special">特殊按钮</UiButton>
        </div>
      </div>
      <div class="area areasize">
        <div class="area-content">
          <UiButton type="primary" size="large">大号按钮</UiButton>
          <UiButton type="primary" size="large" radius="square">大号按钮</UiButton>
          <UiButton type="primary" size="block">全屏按钮</UiButton>
          <UiButton type="primary" size="block" radius="square">全屏按钮</UiButton>
        </div>
      </div>
      <div class="area">
        <p class="area-title">API</p>
        <div class="area-content">
          <table class="area-content--table">
            <thead class="area-content--itemTab">
              <tr>
                <th class="area-content--tabHead col20">参数</th>
                <th class="area-content--tabHead col40">说明</th>
                <th class="area-content--tabHead col20">类型</th>
                <th class="area-content--tabHead col20">默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr class="area-content--itemTab">
                <td class="area-content--desc col20">type</td>
                <td class="area-content--desc col40">default / normal / special</td>
                <td class="area-content--desc col20">String</td>
                <td class="area-content--desc col20">default</td>
              </tr>
              <tr class="area-content--itemTab">
                <td class="area-content--desc col20">radius</td>
                <td class="area-content--desc col40">round / square</td>
                <td class="area-content--desc col20">String</td>
                <td class="area-content--desc col20">round</td>
              </tr>
              <tr class="area-content--itemTab">
                <td class="area-content--desc col20">disabled</td>
                <td class="area-content--desc col40">button状态</td>
                <td class="area-content--desc col20">Boolean</td>
                <td class="area-content--desc col20">-</td>
              </tr>
              <tr class="area-content--itemTab">
                <td class="area-content--desc col20">size</td>
                <td class="area-content--desc col40">normal / large / block</td>
                <td class="area-content--desc col20">String</td>
                <td class="area-content--desc col20">normal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UiButton from '../'

@Component({
  components: { UiButton }
})
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
  width: 100%;
  overflow: hidden;
}
.area {
  margin: 0 .2rem .3rem;
}
.areasize{
  margin: 0;
  .area-title{
    margin: .25rem .2rem;
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
    width: 100%;
    font-size: .24rem;
    color: #666;
    border-collapse: collapse;
    text-align: left;
  }
  thead{
    border:none;
    th{
     background: #f1f4f8;
     padding: 0 .1rem;
   }
  }
  td{
    padding: 0 .1rem;
  }
  &--itemTab{
    line-height: .6rem;
    border-bottom: 1px solid #ebedf0;
  }
}
.area-title {
  font-size: .32rem;
  margin: .25rem 0;
  color: #666;
}
.area.normal {
  .ph-button+.ph-button{
    margin-left: .2rem;
  }
  .ph-button+.ph-button{
    margin-left: .2rem;
  }
}
.ph-button{
  margin-bottom: .2rem!important;
}
</style>
