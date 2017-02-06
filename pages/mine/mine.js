var ajax = require('../../utils/util.ajax.js');
Page({
  data:{
    mCxt:['词条','提问','回答','脑洞'],
    tCont:[],
    page:1,
    flag:false,
    hasMore:false
  },
  onLoad:function(options){
    var that = this;
    ajax.paging('https://route.showapi.com/254-1',that.data.page,function(res){
        that.setData({tCont:res})
      })
  },
  pulluploading:function(){
    var that = this;
    that.setData({hasMore:true});
    that.data.page += 1;
    if(that.data.page<5){
      ajax.paging('https://route.showapi.com/254-1',that.data.page,function(res){
        that.setData({tCont:that.data.tCont.concat(res),hasMore:false})
      })
    }else{
      that.data.page = 1;
        flag = true;
    }
     
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