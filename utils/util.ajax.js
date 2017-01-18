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
    },
    paging:function(url,page,cb){
          wx.request({
            url:url,
            data:{
                showapi_sign:'7a2264ee784147bdb7f28e58975ca864',
                showapi_appid:'30503',  
                typeId:10,
                space:'week',
                page:page   
            },
            header:{
            'content-type':'json'
            },
            error:function(XmlHttpRequest, textStatus, errorThrown){
            console.log("失败")
            },
            success:function(res){
          
            cb(res.data.showapi_res_body.pagebean.contentlist);

            }
        })
    },
    indexList:function(url,typeid,cb){
            wx.request({
            url:url,
            data:{
                showapi_sign:'7a2264ee784147bdb7f28e58975ca864',
                showapi_appid:'30503',  
                typeId:typeid,
                space:'week',
                page:1   
            },
            header:{
            'content-type':'json'
            },
            error:function(XmlHttpRequest, textStatus, errorThrown){
            console.log("失败")
            },
            success:function(res){
            cb(res.data.showapi_res_body.pagebean.contentlist);

            }
        })
    }
}
module.exports = ajax;


  