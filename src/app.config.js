export default {
  pages: [
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#f6f6f6',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    selectedColor: '#818181',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/images/tabBar/home_0325.png',
        selectedIconPath: './assets/images/tabBar/tab_home_select1119.png',
      },
      {
        pagePath: 'pages/index/index',
        text: '看资产',
        iconPath: './assets/images/tabBar/tab_touzi.png',
        selectedIconPath: './assets/images/tabBar/tab_touzi_select.png',
      },
      {
        pagePath: 'pages/index/index',
        text: '找资金',
        iconPath: './assets/images/tabBar/tab_rongzi.png',
        selectedIconPath: './assets/images/tabBar/tab_rongzi_select.png',
      },
      {
        pagePath: 'pages/index/index',
        text: '我的',
        iconPath: './assets/images/tabBar/tab_my1217.png',
        selectedIconPath: './assets/images/tabBar/tab_my_select1217.png',
      },
    ],
  },
}
