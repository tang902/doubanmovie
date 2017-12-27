const URL ="https://api.douban.com/v2/movie/";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleData:[],
    articleBoolean:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMovieArticle(options.ID);
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

  },
  getMovieArticle:function(articleId){
    const _this=this;
    wx.showLoading({
      title:'内容加载中···'
    })
    wx.request({
      url:URL+articleId,
      // data: {},
      header: {'Content-Type':'json'}, // 设置请求的 header , header 中不能设置 Referer
      // dataType: 'json', // 默认为 json。如果设置了 dataType 为 json，则会尝试对响应的数据做一次 JSON.parse
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function(res){
        // success
        console.log(res);
        _this.setData({'articleData':res.data});
        wx.setNavigationBarTitle({
          title: res.data.title
        });
        wx.hideLoading();
        console.log(_this.data.articleData)
        if(_this.data.articleData){
          _this.setData({'articleBoolean':true})
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
