//app.js
//创建一个app实例
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    // wx.login({
    //   success: function(res){
    //     // success
    //   },
    //   fail: function(res) {
    //     // fail
    //   },
    //   complete: function(res) {
    //     // complete
    //   }
    // })
  },
  onShow: function(){

    wx.showModal({
      title:"微信授权",
      content:"墨点申请获得以下授权：获取你的公开信息（昵称、头像等）",
      cancelText:"拒绝",
      confirmText:"允许",
      success: function(res){
        if(res.confirm){
          wx.login({
            success: function(res){
              wx.getUserInfo({
                success: function(res){
                  wx.showModal({
                    title:"授权成功",
                    content:JSON.stringify(res)
                  });
                },
                fail: function(res) {
                  // fail
                },
                complete: function(res) {
                  // complete
                }
              })
            
            },
            fail: function(res) {
              wx.showModal({
                title:"提示信息",
                content:"fail"
              });
            },
            complete: function(res) {
              wx.showModal({
                title:"提示信息complete",
                content:JSON.stringify(res)
              });
            }
          })
        }
      
      }
    });
  },
  onHide: function(){
    console.log("I am Hide")
  },
  onError: function(e){
    console.log(e)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  setProgramInfo: function(info, cb){
    var me = this;
    me.globalData.programInfo = info;
    cb();
    console.log("设置 programInfo");
  },
  getProgramInfo: function(cb){
    var me = this;
    console.log("programInfo 不存在");
    if(me.globalData.programInfo){
      console.log("programInfo 存在");
      typeof cb=="function" && cb(me.globalData.programInfo)
    }
  },
  globalData:{
    userInfo:null,
    programInfo:null,
  }
})