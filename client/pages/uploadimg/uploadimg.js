Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAutonym: true,
    disabled: true, //判断两种图片已经上传才可以提交
    array: ["男", "女"],
    index: 0,
    arraya:["a","b"],
    indexa:0,
    alphaData:null
  },
  tosubmit:function(){
    var animation = wx.createAnimation({})
    animation.opacity(1).step({duration:3000})
    animation.opacity(0).step({ duration: 1000 })
    this.setData({
      alphaData:animation.export()
    })
  },
  getDate: function (e) {
    console.log(e.detail)
  },
  
  chge:function(){
    if(this.data.chge==true){
      this.setData({
        chge: false
      })
    }else{
      this.setData({
        chge: true
      })
    }
  },
  label: function () {
    if (this.data.label == true) {
      this.setData({
        label: false
      })
    } else {
      this.setData({
        label: true
      })
    }
  },
  listenerPickersex: function (options) {//选择性别
    //改变index值，通过setData()方法重绘界面
    this.setData({
      index: options.detail.value
    });
  },
  listenerPickersexa: function (options) {//选择性别
    //改变index值，通过setData()方法重绘界面
    this.setData({
      indexa: options.detail.value
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  chooseImageTap: function () {
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
  // tagsInput: function(e){
  //   console.log('tags');
  //   var tagsinput = require('./tagsInput.js');
  //    var valueid = e.target.id;
  //   var a = tagsinput.tagsInput(valueid, ['delta', 'echo', 'foxtrot']);
  //   // var valueid = e.target.id;
  //   // console.log(valueid);
  //   // a(valueid, ['123132,324324']);
  // },
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
      }
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


