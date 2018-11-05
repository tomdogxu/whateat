//index.js
//获取应用实例
const app = getApp()
var interval = ''

Page({
  data: {
    lunch: '什么',
    lable: '开始',
    search: false,
    lunchInfo: ['嘉禾一品', '大食堂', '静连斋', '拉面', '馅满城'],
    interval: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  },
  getLunch: function(e) {
    if (!this.data.search) {
      this.setData({search: true})
      this.setData({lable: '停'})
      interval = setInterval(() => {
        let index = Math.floor(Math.random() * this.data.lunchInfo.length)
        this.setData({
          lunch: this.data.lunchInfo[index]
        })
      }, 100)
    } else {
      this.setData({ search: false })
      this.setData({ lable: '开始' })
      clearInterval(interval)
    }
  }
})
