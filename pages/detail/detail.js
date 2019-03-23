var appInstance = getApp();

Page({
  data: {
    
  },
  onLoad(e){

      let me = this;
     // console.log(e);
     // console.log(appInstance.getCurrentPage());
     wx.request({
        url: appInstance.dataUrl+'/v2/online/'+ e.id,
        data: {},
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {

             me.setData(res.data)
          
        }


    })
  }
})


