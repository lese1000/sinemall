// about.js
var app = getApp()
var util = require("../../utils/util.js");


var api = require("../../config/api.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    load_statue: true,
    shopInfo: {
      name: '龙岩三玖网络科技有限公司',
      address: '福建省上杭县古田镇古田路166-37号',
      latitude: 25.224879,
      longitude: 116.824861,
      linkPhone: '13338394556',
      qqNumber: '771244175'
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  showLocation: function (e) {
    var that = this
    wx.openLocation({
      latitude: that.data.shopInfo.latitude,
      longitude: that.data.shopInfo.longitude,
      name: that.data.shopInfo.name,
      address: that.data.shopInfo.address,
    })
  },
  callPhone: function (e) {
    var that = this
    wx.makePhoneCall({
      phoneNumber: that.data.shopInfo.linkPhone,
    })
  },
  reLoad: function (e) {
    this.loadShopInfo();
  }
})
