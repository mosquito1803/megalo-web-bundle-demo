<template>
  <div class="demo">
    <div class="area">
      <p class="area-title">公共</p>
      <div class="area-content">
        <ul class="area-content--list">
          <li class="area-content--item">
            <PhIcon type="left"></PhIcon>
            <span class="area-content--itemName">left</span>
          </li>
          <li class="area-content--item">
            <PhIcon size="28" type="right"></PhIcon>
            <span class="area-content--itemName">right</span>
          </li>
          <li class="area-content--item">
            <PhIcon type="close"></PhIcon>
            <span class="area-content--itemName">close</span>
          </li>
          <li class="area-content--item">
            <PhIcon type="scan"></PhIcon>
            <span class="area-content--itemName">scan</span>
          </li>
          <li class="area-content--item">
            <PhIcon type="search"></PhIcon>
            <span class="area-content--itemName">search</span>
          </li>
          <li class="area-content--item">
            <PhIcon type="delete"></PhIcon>
            <span class="area-content--itemName">delete</span>
          </li>
          <li class="area-content--item">
            <PhIcon type="star"></PhIcon>
            <span class="area-content--itemName">star</span>
          </li>
          <li class="area-content--item">
            <PhIcon type="circle"></PhIcon>
            <span class="area-content--itemName">circle</span>
          </li>
          <li class="area-content--item">
            <PhIcon size="36" type="passed"></PhIcon>
            <span class="area-content--itemName">passed</span>
          </li>
          <li class="area-content--item">
            <PhIcon size="36" type="square"></PhIcon>
            <span class="area-content--itemName">square</span>
          </li>
          <li class="area-content--item">
            <PhIcon size="36" type="selected"></PhIcon>
            <span class="area-content--itemName">selected</span>
          </li>
          <li class="area-content--item">
            <PhIcon size="48" type="star1"></PhIcon>
            <span class="area-content--itemName">star1</span>
          </li>
          <li class="area-content--item">
            <PhIcon size="48" type="star1Checked"></PhIcon>
            <span class="area-content--itemName">star1Checked</span>
          </li>
          <li class="area-content--item">
            <PhIcon size="40" type="eye"></PhIcon>
            <span class="area-content--itemName">eye</span>
          </li>
          <li class="area-content--item">
            <PhIcon size="40" type="closeEye"></PhIcon>
            <span class="area-content--itemName">closeEye</span>
          </li>
          <li class="area-content--item">
            <PhIcon size="28" type="clear" @click="handleClick"></PhIcon>
            <span class="area-content--itemName">clear</span>
          </li>
          <li class="area-content--item">
            <PhIcon size="40" type="cart"></PhIcon>
            <span class="area-content--itemName">cart</span>
          </li>
          <li class="area-content--item">
            <PhIcon size="40" type="message"></PhIcon>
            <span class="area-content--itemName">message</span>
          </li>
          <li class="area-content--item">
            <PhIcon size="20" type="minus"></PhIcon>
            <span class="area-content--itemName">minus</span>
          </li>
          <li class="area-content--item">
            <PhIcon size="18" type="plus"></PhIcon>
            <span class="area-content--itemName">plus</span>
          </li>
          <li class="area-content--item">
            <PhIcon size="36" type="selected-disabled"></PhIcon>
            <span class="area-content--itemName">selected-disabled</span>
          </li>
          <li class="area-content--item">
            <PhIcon size="48" type="upload"></PhIcon>
            <span class="area-content--itemName">upload</span>
          </li>
          <li class="area-content--item">
            <PhIcon size="36" type="time" color="#FF8462"></PhIcon>
            <span class="area-content--itemName">time</span>
          </li>
          <li class="area-content--item">
            <PhIcon type="classification"></PhIcon>
            <span class="area-content--itemName">classification</span>
          </li>
          <li class="area-content--item">
            <PhIcon type="user"></PhIcon>
            <span class="area-content--itemName">user</span>
          </li>
        </ul>
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
              <td class="area-content--desc">type</td>
              <td class="area-content--desc">内置icon类型</td>
              <td class="area-content--desc">String</td>
              <td class="area-content--desc">-</td>
            </tr>
            <tr class="area-content--itemTab">
              <td class="area-content--desc">size</td>
              <td class="area-content--desc">尺寸</td>
              <td class="area-content--desc">Number</td>
              <td class="area-content--desc">40</td>
            </tr>
            <tr class="area-content--itemTab">
              <td class="area-content--desc">color</td>
              <td class="area-content--desc">图标颜色</td>
              <td class="area-content--desc">String</td>
              <td class="area-content--desc">#7f7f7f</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PhIcon from "../";

@Component({
  components: { PhIcon }
})
export default class App extends Vue {
  handleClick(e: any) {
    console.log(e);
  }
}
</script>

<style lang="scss">
ul,
li,
p,
div,
span,
body,
html {
  margin: 0;
  padding: 0;
}
.area {
  margin: 0 0.2rem 0.2rem;
}
.areasize {
  margin: 0;
  .area-title {
    margin: 0.25rem 0.2rem;
  }
  .area-content {
    button {
      &:first-child {
        margin-left: 0.2rem;
      }
      &:last-child {
        margin-left: 0;
      }
    }
  }
}
.area-content {
  // height: 1rem;
  font-size: 0;
  &--tab {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    font-size: 22px;
    width: 100%;
    line-height: 44px;
    border-top: 1px solid #ebedf0;
    border-bottom: 1px solid #ebedf0;
  }
  &--tabItem {
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
  &--list {
    widows: 100%;
    overflow: hidden;
  }
  &--item {
    display: inline-block;
    vertical-align: top;
    text-align: center;
    width: 25%;
    margin: 0.4rem 0;
    color: #7f7f7f;
  }
  &--itemName {
    display: block;
    font-size: 0.24rem;
    color: #666;
    margin-top: 0.1rem;
  }
  &--table {
    width: 100%;
    font-size: 0.24rem;
    color: #666;
    border-collapse: collapse;
    text-align: left;
  }
  thead {
    border: none;
    th {
      background: #f1f4f8;
      padding: 0 0.1rem;
    }
  }
  td {
    padding: 0 0.1rem;
  }
  &--itemTab {
    line-height: 0.6rem;
    border-bottom: 1px solid #ebedf0;
  }
}
.area-title {
  font-size: 0.32rem;
  margin: 0.25rem 0;
  color: #666;
}
</style>
