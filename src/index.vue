<template>
  <div>
    <wxc-tab-bar :tab-titles="tabTitles"
                 :tab-styles="tabStyles"
                 title-type="icon"
                 @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
      <!-- 第一个页面内容-->
      <div class="item-container" :style="contentStyle">
        <Home></Home>
      </div>

      <!-- 第二个页面内容-->
      <div class="item-container" :style="contentStyle"><text>找房</text></div>

      <!-- 第三个页面内容-->
      <div class="item-container" :style="contentStyle"><text>租房</text></div>

      <!-- 第四个页面内容-->
      <div class="item-container" :style="contentStyle"><text>业主</text></div>

      <!-- 第五个页面 -->
      <div class="item-container" :style="contentStyle"><text>我的</text></div>
    </wxc-tab-bar>
  </div>
</template>

<script>
import { WxcTabBar, Utils, WxcButton } from 'weex-ui'
import Home from '@/pages/Home/index'
export default {
  name: 'BottomBar',
  components: {
    WxcTabBar,
    Utils,
    WxcButton,
    Home
  },
  data () {
    return {
      tabTitles: [
        {
          title: '首页',
          icon: '/web/assets/img/home.png',
          activeIcon: '/web/assets/img/home1.png'
        },
        {
          title: '找房',
          icon: '/web/assets/img/daohang.png',
          activeIcon: '/web/assets/img/daohang1.png'
        },
        {
          title: '租房',
          icon: '/web/assets/img/jiahao.png',
          activeIcon: '/web/assets/img/jiahao1.png'
        },
        {
          title: '业主',
          icon: '/web/assets/img/yewu.png',
          activeIcon: '/web/assets/img/yewu1.png'
        },
        {
          title: '我的',
          icon: '/web/assets/img/wode.png',
          activeIcon: '/web/assets/img/wode.png'
        }
      ],
      tabStyles: {
        bgColor: '#FFFFFF',
        titleColor: '#666666',
        activeTitleColor: '#3D3D3D',
        activeBgColor: '#FFFFFF',
        isActiveTitleBold: true,
        iconWidth: 70,
        iconHeight: 70,
        width: 160,
        height: 120,
        fontSize: 24,
        textPaddingLeft: 10,
        textPaddingRight: 10
      },
      tabIconFontStyles: {
        bgColor: '#FFFFFF',
        titleColor: '#666666',
        activeTitleColor: '#3D3D3D',
        activeBgColor: '#FFFFFF',
        isActiveTitleBold: true,
        width: 160,
        height: 120,
        fontSize: 24,
        textPaddingLeft: 10,
        textPaddingRight: 10,
        iconFontSize: 50,
        iconFontMarginBottom: 8,
        iconFontColor: '#333333',
        activeIconFontColor: 'red',
        iconFontUrl: '//at.alicdn.com/t/font_501019_mauqv15evc1pp66r.ttf'
      }
    }
  },
  props: {},
  watch: {},
  methods: {
    wxcTabBarCurrentTabSelected (e) {
      const index = e.page
      console.log(index)
    }
  },
  computed: {},
  created () {
    const tabPageHeight = Utils.env.getPageHeight()
    // 如果页面没有导航栏，可以用下面这个计算高度的方法
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
    const { tabStyles } = this
    this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' }
  },
  mounted () {
  },
  destroyed () {
  }
}
</script>

<style scoped>
  .item-container {
    width: 750px;
    background-color: #f2f3f4;
    align-items: center;
    justify-content: center;
  }
</style>
