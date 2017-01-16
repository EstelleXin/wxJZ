var ajax ={
    get:function(url,cb){
        wx.request({
            url:url,
            data:{
                showapi_sign:'7a2264ee784147bdb7f28e58975ca864',
                showapi_appid:'30503',       
            },
            header:{
            'content-type':'json'
            },
            error:function(XmlHttpRequest, textStatus, errorThrown){
            console.log("失败")
            },
            success:function(res){
            console.log(res);
            console.log(res.data.showapi_res_body);
            cb(res.data.showapi_res_body);
            }
        })
    }
}
module.exports = ajax;


  