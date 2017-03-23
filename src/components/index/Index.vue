<template>
  <div id="app">
    <!-- 侧滑导航根容器 -->
    <div class="mui-off-canvas-wrap mui-draggable">
      <!-- 菜单容器 -->
      <aside class="mui-off-canvas-left" v-show="true">
        <div class="mui-scroll-wrapper">
          <div class="mui-scroll">
            <header class="mui-bar mui-bar-nav aside-head">
              <span class="mui-pull-left">2017年</span>
              <a class="mui-icon  mui-icon-gear mui-pull-right"></a>
            </header>
            <div class="mui-content content" id="asideList">
              <ul class="aside-list">
                <li v-for="(x,y) in content" :key="y"><span class="mui-icon iconfont  aside-icon" :class="asideicons[y]"></span><span class="icon-font">{{x}}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <!-- 主页面容器 -->
      <div class="mui-inner-wrap">`
        <!-- 主页面标题 -->
        <header class="mui-bar mui-bar-nav" id="head">
          <a class="mui-icon mui-action-menu mui-icon-bars mui-pull-left Aicon"></a>
          <h1 class="mui-title">易行销</h1>
          <a class="mui-icon icon-kaiguan iconfont mui-pull-right Aicon"></a>
        </header>
        <div class="mui-content mui-scroll-wrapper">
          <div class="mui-scroll" id="index">
            <!-- 主界面具体展示内容 -->
            <list-componets v-for="(x,y) in titles" :ids="ids[y]" :title="titles[y]" :features="features[y]" :icon="icons[y]" :openPageVals="openPageVals[y]" :key="y"></list-componets>
          
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import listComponent from './Listcomponents.vue'
import './../../css/index.css'

export default {
  name: 'app',
  data () {
    return {
        titles: ['活<br />动', '渠<br />道', '自<br />助'],
          features: [
            ['客户', '计划', '日程'],
            ['银行', '中介', '综拓'],
            ['保全', '理赔']
          ],
          icons: [
                [{
                  "icon-kehu": true,
                  "iconfont-sky": true
                }, {
                  "icon-jihua": true,
                  "iconfont-deepSky": true
                }, {
                  "icon-richeng": true,
                  "iconfont-sky": true
                }],
                [{
                  "icon-yinxing": true,
                  "iconfont-sky": true
                }, {
                  "icon-20140609102112349easyiconnet": true,
                  "iconfont-deepSky": true
                }, {
                  "icon-e617": true,
                  "iconfont-sky": true
                }],
                [{
                  "icon-baoquancaiwu": true,
                  "iconfont-sky": true
                }, {
                  "icon-lipeiguanli": true,
                  "iconfont-deepSky": true
                }, ]

            ],
        ids : [
          ['customer','plan','schedule'],
          ['bank','intermediary','expand'],
          ['rescue','claims']
        ],
        content : ['首页','客户','计划','日程','银行','中介','综拓','保全','理赔','报价','通知','工具'],
        asideicons : ['icon-shouyeshouye','icon-kehu','icon-jihua','icon-richeng','icon-yinxing','icon-20140609102112349easyiconnet',
        'icon-e617','icon-baoquancaiwu','icon-lipeiguanli','icon-baojiakaidan','icon-xinfengpsd','icon-gongju'],
        openPageVals: [
        [ 
          { path: '/customer' },
          { path: '/plan' },
          { path: '/schedule' }
        ],
        [ 
          { path: '/bank' },
          { path: '/intermediary' },
          { path: '/expand' }
        ],
        [ 
          { path: '/rescue' },
          { path: '/claims' }
        ],
      ]
    }

  },

  components: {
      'list-componets': listComponent
  }
}



</script>

<style scoped>
#app{
  height: 100%;
}
</style>
