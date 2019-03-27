var model = require('../../../citymdoel/citymdoel.js')
var show = false;
var item = {};
Page({
  /**
   * 页面的初始数据
   */
  data: {
    array: ["男", "女"],
    index: 0,
    imgUrl: null,
    item: {
      show: show
    },
    alphaData:null
  },
  tosave:function(){
    var animation = wx.createAnimation({})
    animation.opacity(1).step({ duration: 3000 })
    animation.opacity(0).step({ duration: 1000 })
    this.setData({ alphaData:animation.export()})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  listenerPickersex: function (options) {//选择性别
    //改变index值，通过setData()方法重绘界面
    this.setData({
      index: options.detail.value
    });
  },
  listenerphone: function (options) {//修改电话号码
    wx.showModal({
      title: "提示",
      content: "你已经绑定此手机号，如设置过登录密码，可以通过手机号+密码的方式登录小程序",
      confirmText: "修改手机",
      confirmColor: "#09bb07",
      success: function (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '../editphone/editphone',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  setPhotoinfo: function () {
    wx.showModal({
      title: "更换头像",
      content: "从相册选择新头像",
      confirmText: "确定",
      confirmColor: "#09bb07",
      success: function (res) {
        if (res.confirm) {
          var _this = this;
          wx.chooseImage({
            count: 1,
            sizeType: ["original", "compressed"],//可以指定原还是缩略图，默认两者都有
            sourceType: ["album", "camera"],//可以指定来源路径
            success: function (res) {
              var tempFilePaths = res.tempFilePaths
              _this.setData({
                imgUrl: tempFilePaths
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },




  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    var that = this;
    //请求数据
    model.updateAreaData(that, 0, e);
  },

  //点击选择城市按钮显示picker-view
  translate: function (e) {
    model.animationEvents(this, 0, true, 400);
  },
  //隐藏picker-view
  hiddenFloatView: function (e) {
    model.animationEvents(this, 200, false, 400);
  },
  //滑动事件
  bindChange: function (e) {
    model.updateAreaData(this, 1, e);
    item = this.data.item;
    this.setData({
      province: item.provinces[item.value[0]].name,
      city: item.citys[item.value[1]].name,
      county: item.countys[item.value[2]].name
    });
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