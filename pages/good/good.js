Page({
  data:{
        g_flag:"flase",
        z_info:["553期","新鲜事儿","39位酱友","44次加料","142次蘸"],        
  },
  onLoad:function(options){
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    wx.showToast({
        titile:'猛速追',
        icon:'loading'
    });
    wx.request({
        url:'https://route.showapi.com/341-3',
        data:{
            page:"1",
            showapi_sign:'7a2264ee784147bdb7f28e58975ca864',
            showapi_appid:'30503'            
        }
    })
  },
  onReady:function(){
    // 页面渲染完成

  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})