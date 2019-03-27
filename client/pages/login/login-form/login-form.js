// pages/login/login-form/login-form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    alphaData:null,
    mn:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  tologin:function(){
    var animation = wx.createAnimation({})
    animation.opacity(1).step({duration:3000})
    animation.opacity(0).step({duration:1000})
    this.setData({
      alphaData: animation.export(),
      mn:true
    })
  },
  tostop:function(){
    this.setData({
      mn: false
    })
  },
  onLoad: function (options) {
  
  },
  beback:function(){
    wx.navigateTo({
      url: '../login-index/login-index',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})