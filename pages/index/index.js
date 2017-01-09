//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    array:[
        {
          type:'financial',
          name:'金融',
          items:[
            {
              name:'微众银行'
            },
            {
              name:'汇率e'
            },
            {
              name:'微众银行'
            },
            {
              name:'汇率e'
            },
            {
              name:'微众银行'
            },
            {
              name:'汇率e'
            }
          ]
        },
        {
          type:'Bservice',
          name:'商业服务',
          items:[
            {
              name:'微众银行'
            },
            {
              name:'汇率e'
            }
          ]
        },
        {
          type:'education',
          name:'教育',
          items:[
            {
              name:'词汇量测试'
            },
            {
              name:'有钱兔择校'
            },
            {
              name:'化妆品点评'
            },
            {
              name:'丁香医生+'
            },
            {
              name:'钢琴优客'
            },
            {
              name:'小D词典'
            },
            {
              name:'扇贝小字典'
            },
            {
              name:'实习委员'
            },
            {
              name:'小密圈'
            }
          ]
        }
      ]
  },
  //监听页面加载
  onLoad: function(){
    console.log("Index page onload!");
    var me = this;
    app.getUserInfo((userInfo)=>me.setData({userInfo}));
  },
  //监听页面初次渲染完成
  onReady: function(){

  },
  //监听页面显示
  onShow: function(){

  },
  //监听页面隐藏
  onHide: function(){

  },
  //监听页面卸载
  onUnload: function(){

  },
  //监听用户下拉刷新动作
  onPullDownRefresh: function(){
    
  },
  //监听页面上拉触底事件
  onReachBottom: function(){

  },
  //用户点击右上角分享
  onShareAppMessage: function(){

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  itemTap: function(e){
      var targetName = e.currentTarget.dataset.name;
      console.log(targetName)
      wx.setStorageSync('programInfo', {
        name: targetName,
        info:"这是这个app的介绍啊，看好了了！！！"
      });
      wx.navigateTo({
        url: '../logs/logs'
      })
      wx.switchTab({
        url: '../info/info'
      })
      
  },
  primary: function(){
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res){
        // success
        var tempFilePaths  = res.tempFilePaths;
        
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
  // onLoad: function () {
  //   console.log('onLoad')
  //   var that = this
  //   //调用应用实例的方法获取全局数据
  //   app.getUserInfo(function(userInfo){
  //     //更新数据
  //     that.setData({
  //       userInfo:userInfo
  //     })
  //   })
  // }
})
