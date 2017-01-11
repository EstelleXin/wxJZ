var ajax ={
    get:function(url,cb){
        wx.request({
            url:url,
            header:{
                'content-type':'json'
            },
            success:function(res){
                cb(res);
            }
        })
    }
}
module.exports = ajax;