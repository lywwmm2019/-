//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //进入APP页面事件如理
  homeTan:function (){
     wx.redirectTo({
        url: '../home/home'
      })
  },
  onLoad:function () {
   
  } 
})
