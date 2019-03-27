Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: [],
    lineMouth: [],//线口数据
    draft: [],//发稿数数据
    lineopen: false,//线口打开
    lineshow: false, //线口内容区
    gsopen: false,//发稿数打开
    gsshow: false, //发稿数内容区
    isfull: false,//遮罩层
    citycenter: {},//城市
    cityright: {},//省份
    select1: '',//获取省份城市名字
    select2: '省市',//设置默认值
    shownavindex: '',//省份索引
    catalogSelect: 0,//设置发稿数索引值
    viewDataSet: '选择分类',//设置默认值
    lineDataSet: "售卖中",//设置默认值
    lineSelect: 0//设置线口索引值
  },

  realname: function () {
    wx.navigateTo({
      url: "../uploadimg/uploadimg",
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      lineMouth: [
        {
          "lineMouths": "审核中",
          "select": 0
        },
        {
          "lineMouths": "未通过",
          "select": 1
        },
        {
          "lineMouths": "售卖中",
          "select": 2
        },
        {
          "lineMouths": "已卖出",
          "select": 3
        },
        {
          "lineMouths": "已下架",
          "select": 4
        },
      ],
      draft: [{
        "gaoshu": "风景",
        "select": 0
      },
      {
        "gaoshu": "美女",
        "select": 1
      },
      {
        "gaoshu": "动物",
        "select": 2
      },
      ]
    })
  },

  listline: function (e) {//线口
    // console.log(e.currentTarget.dataset);
    if (this.data.lineopen) {
      this.setData({
        lineopen: false,
        gsopen: false,

        lineshow: false,
        gsshow: true,

        isfull: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        content: this.data.lineMouth,
        lineopen: true,
        gsopen: false,

        lineshow: false,
        gsshow: true,

        isfull: true,
        shownavindex: e.currentTarget.dataset.nav
      })
    }
  },
  listnumber: function (e) {//发稿数
    if (this.data.gsopen) {
      this.setData({
        lineopen: false,
        gsopen: false,

        lineshow: true,
        gsshow: false,

        isfull: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        content: this.data.draft,
        lineopen: false,
        gsopen: true,

        lineshow: true,
        gsshow: false,

        isfull: true,
        shownavindex: e.currentTarget.dataset.nav
      })
    }
    console.log(e.target)
  },


  hidebg: function (e) { //遮罩层
    this.setData({
      qyopen: false,
      lineopen: false,
      gsopen: false,
      lineshow: true,
      gsshow: true,
      qyshow: true,
      isfull: false,
      shownavindex: 0
    })
  },

  chooseCatalog: function (e) { //发稿数列表
    // var viewId = e.target.id;
    // var viewDataSet = e.target.dataset;
    var viewDataSet1 = e.target.dataset.text;
    // var viewText = viewDataSet.text;
    // console.log(e.currentTarget.dataset);
    // console.log(viewId); //输出点击的view的id，第二种情况就不重复写了
    // console.log(viewText); //输出该文本
    console.log(viewDataSet1); //输出该文本
    console.log(e.currentTarget.dataset.select);
    var that = this;
    that.setData({//把选中值放入判断值
      catalogSelect: e.currentTarget.dataset.select,
      gsopen: false,
      isfull: false,
      viewDataSet: e.target.dataset.text,
      // gaoshu: '发稿数',
    })
  },
  lineMouthBtn: function (e) {//线口列表
    var that = this;
    console.log(e.currentTarget.dataset.select);
    that.setData({
      lineSelect: e.currentTarget.dataset.select,
      lineopen: false,//线口
      isfull: false,
      lineDataSet: e.target.dataset.text,
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