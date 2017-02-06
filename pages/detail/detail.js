// pages/detail/detail.js
Page({
  data:{},
  onLoad:function(options){
    wx.showNavigationBarLoading();
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options.id);
    wx.request({
      url:'https://route.showapi.com/254-1'+options.id,
      header:{'content-type':'json'},
      success:function(res){
        console.log(res.data);
        wx.hideNavigationBarLoading();
        //修改title
        wx.setNavigationBarTitle({
         
        })
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