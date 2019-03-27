Page({
  data:{
    search: '取消',
    havcon:false,
    havcona:true
  },
  getInput: function (e) {
    this.setData({ keyword: e.detail.value });
    var keyword = this.data.keyword;
    if (keyword) {
      this.setData({ search: "搜索" });
    } else {
      this.setData({ search: "取消" });
    }
  },
  search: function () {
    var keyword = this.data.keyword;
    if (!keyword) {
      wx.navigateBack();
    } else {
      //请求服务器数据
      wx.request({
        url: '',//这里填写后台给你的搜索接口
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res.data)
          if (res.data.length == 0) {
            that.setData({
              centent_Show: false,
            });
          }
          that.setData({
            
          });
        },
        fail: function (e) {
          wx.showToast({
            title: '网络异常！',
            duration: 2000
          });
        }
      })
    }
  },
})