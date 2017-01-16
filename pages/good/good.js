var ajax = require('../../utils/util.ajax.js');
Page({
  data:{
        g_flag:"flase",
        z_info:["553期","新鲜事儿","39位酱友","44次加料","142次蘸"], 
        gList:[]       
  },
  onPullDownRefresh:function(){
    setTimeout(function(){
      wx.stopPullDownRefresh();

    },1000)
  },
  onLoad:function(options){
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    wx.showToast({
        titile:'猛速追',
        icon:'loading'
    });
  ajax.get("https://www.estellexin.cn/jz/119-42",function(res){
    console.log(res.list);
    that.setData({
      gList:res.list
    })
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