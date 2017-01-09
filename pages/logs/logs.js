//logs.js
var util = require('../../utils/util.js');
var app = getApp()
Page({
  data: {
    logs: [],
    programInfo:{}
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  onShow: function(){
    var me = this;
    console.log("显示了");
    var programInfo = wx.getStorageSync("programInfo");
    wx.setNavigationBarTitle({
        title: programInfo.name,
        success: function(res) {
          // success
        }
      })
    console.log(programInfo);
    me.setData({programInfo:programInfo})
  }
})
