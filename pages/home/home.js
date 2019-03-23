var app = getApp();
Page({
  data: {

    //切换图片相关配置
    imgUrls: [
      '../images/home-1.jpg',
      '../images/home-2.jpg',
      '../images/home-3.jpg',
      '../images/home-4.jpg',
      '../images/home-5.jpg',
      '../images/home-6.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
   //列表页数据
    listData:''

 },
 lower(){
    console.log(true);
 },
  onLoad(){

    let me = this;
    wx.request({
      url: app.dataUrl+'/v2/onlines',
      data: {
        cate: 'latest'
      },
      method:'GET',
      header: {
          'Content-Type': 'application/json'
      },
      fail:function(){
        alert('加载失败!!!');
      },
      success: function(res) {
        me.setData({
          listData: res.data
        })
       
      }
    })
  }
})



