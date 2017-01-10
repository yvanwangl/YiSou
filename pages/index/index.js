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
      ],
      arrayPicker: ['美国', '中国', '巴西', '日本'],
      index: 0,
      time:'12:01',
      date:'2016-01-05',
      blogs:[]
  },
  bindPickerChange:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindTimeChange: function(e){
    this.setData({
      time: e.detail.value
    });
  },
  bindDateChange: function(e){
    this.setData({
      date: e.detail.value
    });
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function() {
    console.log('form发生了reset事件')
  },
  //监听页面加载
  onLoad: function(){
    console.log("Index page onload!");
    var me = this;
    app.getUserInfo((userInfo)=>me.setData({userInfo}));
    wx.request({
      url: 'https://blog.yvanwang.com/blog?is_login=false&type=all&page=1&authCookie=', //仅为示例，并非真实的接口地址
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        me.setData({
          blogs:res.data.blogs
        });
      }
    })
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
      // wx.navigateTo({
      //   url: '../info/info'
      // })

      wx.showActionSheet({
        itemList: ['A', 'B', 'C'],
        success: function(res) {
          if(res.tapIndex==2){
            // wx.showModal({
            //   title: '提示',
            //   content: targetName,
            //   success: function(res) {
            //     if (res.confirm) {
            //       console.log('用户点击确定')
            //     }
            //   }
            // });
            // wx.chooseImage({
            //   count: 1, // 默认9
            //   sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            //   sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            //   success: function (res) {
            //     // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            //     var tempFilePaths = res.tempFilePaths
            //   }
            // })
            wx.getLocation({
              type: 'wgs84',
              success: function({latitude,longitude,speed,accuracy}) {
                // var latitude = res.latitude
                // var longitude = res.longitude
                // var speed = res.speed
                // var accuracy = res.accuracy
                wx.showModal({
                  title: '提示',
                  content: latitude+"--"+longitude+"--"+speed+"--"+accuracy,
                  success: function(res) {
                    if (res.confirm) {
                      console.log('用户点击确定')
                    }
                  }
                });
              }
            });
            // wx.chooseLocation({

            // });
            wx.getLocation({
              type: 'gcj02', //返回可以用于wx.openLocation的经纬度
              success: function(res) {
                var latitude = res.latitude
                var longitude = res.longitude
                wx.openLocation({
                  latitude: latitude,
                  longitude: longitude,
                  scale: 28
                })
              }
            })
          }
        },
        fail: function(res) {
          console.log(res.errMsg)
        }
      });
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
