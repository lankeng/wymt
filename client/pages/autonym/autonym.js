// pages/autonym/autonym.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAutonym: true,
    isAutonymtwo: true,
    disabled: true ,//判断两种图片已经上传才可以提交
    alphaData:null
  },
  tosubmit:function(){
    var animation = wx.createAnimation({})
    animation.opacity(1).step({duration:3000})
    animation.opacity(0).step({duration:1000})
    this.setData({
      alphaData:animation.export()
    })
  },

  chooseImageTap: function () {//身份证正面
    let _this = this;
    wx.showActionSheet({
      itemList: ['从相册中选择','拍照'],
      itemColor: "#333",
      success: function (res) {
        console.log(res);
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            _this.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            _this.chooseWxImage('camera')
          }
        }
      }
    })
  },
  chooseWxImage: function (type) {
    let _this = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 1000
        })
        console.log(res);
        _this.setData({
          item1: res.tempFilePaths[0],
          isAutonym: false
        })
        if (_this.data.isAutonym == false && _this.data.isAutonymtwo == false) {
          _this.setData({
            disabled: false
          })
        }
      }
    })
  },
  chooseImageBot: function () {//身份证反面
    let _this = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#333",
      success: function (res) {
        console.log(res);
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            _this.chooseWxImagetwo('album')
          } else if (res.tapIndex == 1) {
            _this.chooseWxImagetwo('camera')
          }
        }
      }
    })
  },

  chooseWxImagetwo: function (type) {
    let _this = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 1000
        })
        console.log(res);
        _this.setData({
          item2: res.tempFilePaths[0],
          isAutonymtwo: false
        })
        if (_this.data.isAutonym == false && _this.data.isAutonymtwo == false){
          _this.setData({
            disabled:false
          })
        }
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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