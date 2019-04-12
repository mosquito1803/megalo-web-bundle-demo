<template>
  <div class="demo">
    <ul class="area-content--tab">
      <li class="area-content--tabItem active">标题 list</li>
    </ul>
    <div class="area areasize">
      <div class="area-content">
        <span class="area-content--title">基础</span>
        <PhList title="我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字" 
                ></PhList>
      </div>

      <div class="area-content">
        <span class="area-content--title">带副标题</span>
        <PhList title="我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题" 
                subTitle="我是副标题"></PhList>
      </div>

      <div class="area-content">
        <span class="area-content--title">带左侧icon</span>
        <PhList title="我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题" 
                leftIcon="time"></PhList>
        <PhList title="我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题" 
                rightIcon="right"
                subTitle="副标题"
                leftIcon="time"></PhList>
      </div>

      <div class="area-content">
        <span class="area-content--title">右侧带icon</span>
        <PhList title="我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题" 
                rightIcon="right"></PhList>
      </div>

      <div class="area-content">
        <span class="area-content--title">带描述</span>
        <PhList title="我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题" 
                desc="描述文字"
        ></PhList>

         <PhList title="我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题" 
                 desc="描述文字"
                 rightIcon="right"
        ></PhList>

         <PhList title="我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题" 
                 desc="描述文字"
                 rightIcon="right"
                 leftIcon="time"
        ></PhList>

        <div class="area-content">
          <span class="area-content--title">复合组件</span>
          <PhList title="我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题" 
                  subTitle="我是副标题"
                  type="slot"
                  rightIcon="right"
          ><PhBadge type="list"></PhBadge></PhList>
        </div>
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
              <td class="area-content--desc">组件类型</td>
              <td class="area-content--desc">String(default、special)</td>
              <td class="area-content--desc">default</td>
            </tr>
            <tr class="area-content--itemTab">
              <td class="area-content--desc">title</td>
              <td class="area-content--desc">标题</td>
              <td class="area-content--desc">String</td>
              <td class="area-content--desc">-</td>
            </tr>
            <tr class="area-content--itemTab">
              <td class="area-content--desc">subTitle</td>
              <td class="area-content--desc">副标题</td>
              <td class="area-content--desc">String</td>
              <td class="area-content--desc">-</td>
            </tr>
            <tr class="area-content--itemTab">
              <td class="area-content--desc">desc</td>
              <td class="area-content--desc">描述</td>
              <td class="area-content--desc">String</td>
              <td class="area-content--desc">-</td>
            </tr>
            <tr class="area-content--itemTab">
              <td class="area-content--desc">rightIcon</td>
              <td class="area-content--desc">右侧icon</td>
              <td class="area-content--desc">String</td>
              <td class="area-content--desc">-</td>
            </tr>
            <tr class="area-content--itemTab">
              <td class="area-content--desc">leftIcon</td>
              <td class="area-content--desc">左侧icon</td>
              <td class="area-content--desc">String</td>
              <td class="area-content--desc">-</td>
            </tr>
            <tr class="area-content--itemTab">
              <td class="area-content--desc">hasBTborder</td>
              <td class="area-content--desc">是否需要底部border</td>
              <td class="area-content--desc">Boolean</td>
              <td class="area-content--desc">true</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="area-title">Event</p>
      <div class="area-content">
        <table class="area-content--table">
          <thead class="area-content--itemTab">
            <tr>
              <th class="area-content--tabHead col20">事件名</th>
              <th class="area-content--tabHead col40">说明</th>
              <th class="area-content--tabHead col20">参数</th>
            </tr>
          </thead>
          <tbody>
            <tr class="area-content--itemTab">
              <td class="area-content--desc">onClick</td>
              <td class="area-content--desc">点击时触发</td>
              <td class="area-content--desc">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PhList from '../'

@Component({
  components: { PhList }
})
export default class App extends Vue {
  private value:any = 1;
  private value1:any = 2;
  private value2:any = 3;

  onRead(files:any){
      //debugger;
      //console.log(files.content)
      let fd = new FormData();
      fd.append('upfile', files.file);
      console.log(fd);
    }
}
</script>

<style lang="scss">
ul,li,p,div,span,body,html{
  margin: 0;
  padding: 0;
}
.demo{
   background: #FAFAFA;
}
.area {
  margin: 0 .2rem .2rem;
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
    }
  }
}
.area-content{
  // height: 1rem;
  margin-bottom: .7rem;
  font-size: 0;
  &--title{
    font-size: .28rem;
    color: #666;
    display: block;
    margin: .2rem;
  }
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
  &--list{
    widows: 100%;
    overflow: hidden;
  }
  &--item{
    float: left;
    text-align: center;
    width: 25%;
    margin: .4rem 0;
    color: #7F7F7F;
  }
  &--itemName{
    display: block;
    font-size: .24rem;
    color: #666;
    margin-top: .1rem;
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
</style>
