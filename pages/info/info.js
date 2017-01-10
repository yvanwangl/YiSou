var util = require('../../utils/util.js');
var app = getApp()
Page({
  data: {
    logs: [],
    programInfo:{
      name:"",
      info:""
    }
  },
  onLoad: function () {
    var me = this;
    var programInfo = wx.getStorageSync("programInfo");
    wx.setNavigationBarTitle({
        title: programInfo.name,
        success: function(res) {
          // success
        }
      })
    me.setData({programInfo:programInfo})
  },
  onShow: function(){
    var me = this;
    var programInfo = wx.getStorageSync("programInfo");
    console.log(programInfo.name+"dfdfd");
    wx.setNavigationBarTitle({
        title: programInfo.name,
        success: function(res) {
          // success
          console.log("设置标题成功"+programInfo.name);
        }
      })
    me.setData({
      programInfo:programInfo
    })
  },
  onHide: function(){
    var me = this;
    console.log("I am hide");
    wx.setStorageSync("programInfo",{});
    wx.setNavigationBarTitle({
        title: "",
        success: function(res) {
          // success
        }
      })
  }
})
