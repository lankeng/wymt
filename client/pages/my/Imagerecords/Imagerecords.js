// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sailresult:true,
    sailnoresult:false,
    record: [
      {
        date: "2018年05月10日",
        content: [
          {
            total: "麦田救灾演绎军民鱼水情",
            url: "/assets/images/junminq_03.png",
            money: "10",
            checked: true,
            state: "已卖出"
          },
          {
            total: "荥阳崔庙镇郑岗村柿子红了",
            url: "/assets/images/shizi_03.png",
            money: "10",
            checked: true,
            state: "已卖出"
          },
          {
            total: "荥阳崔庙镇郑岗村柿子红了",
            url: "/assets/images/shizi_03.png",
            money: "10",
            checked: false,
            state: "未卖出"
          }
        ]
      },
      {
        date: "2018年06月20日",
        content: [
          {
            total: "荥阳崔庙镇郑岗村柿子红了",
            url: "/assets/images/shizi_03.png",
            money: "10",
            checked: true,
            state: "已卖出"
          },
          {
            total: "麦田救灾演绎军民鱼水情",
            url: "/assets/images/junminq_03.png",
            money: "10",
            checked: false,
            state: "未卖出"
          },
          {
            total: "麦田救灾演绎军民鱼水情",
            url: "/assets/images/junminq_03.png",
            money: "10",
            checked: true,
            state: "已卖出"
          }
        ]
      }
    ]
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