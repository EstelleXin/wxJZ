//index.js
//引入模块化
var ajax = require('../../utils/util.ajax.js');
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    current:0,
    lstyle:"noBorder",
    index:0,
    src:"/images/ic_qq.png",
    mode:'scaleToFill',
    userName:"xinxin",
    hidden:false,
    hasRefesh:false,
    hasMore:true,
    list:[]
  },
 changes:function(e){
   this.setData({
     index:e.detail.current
   })
 },
  changeCurrent:function(e){
      this.setData({
        index:e.target.dataset.current,
        current:e.target.dataset.current
      })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //页面初始化，options为页面跳转所带的参数
  onLoad: function () {
    console.log('onLoad')
    var that = this;
    //放在加载完数据里面
    that.setData({
      hidden:true
    })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  //页面渲染完成
  onReady:function(){
    console.log("onReady");
    var that = this;
    wx.request({
      url:'https://hello.dev/api/v2/movie/in_theaters',
      header:{'content-type':'json'},
      success:function(res){
        console.log("获取数据为")
        console.log(res.data.subjects);
        console.log(res);
        that.setData({
          list:res.data.subjects
        })
      }
    })
  },
  //页面显示
  onShow:function(e){
    console.log("onShow");
    var that = this;
    // wx.getSystemInfo({
    //   success:(res)=>{
    //     that.setData({
    //       windowHeight:res.windowHeight,
    //       windowWidth:res.windowWidth
    //     })
    //   }
    // })
  },
  //下拉刷新
  pullDownRefresh:function(e){
    console.log("pullDownRefresh");
    console.log(e);
  },
  pullUpLoad:function(e){
    console.log("上拉加载");
    console.log(e);
  },
  //页面隐藏
  onHide:function(){
    console.log("onHide");
  },
  //页面关闭
  onUnload:function(){
    console.log("onUnload");
  },
  //分享
  onShareAppMessage: function () {
      return {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: '/page/user?id=123'
    }
  }
})
