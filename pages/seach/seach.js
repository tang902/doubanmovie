import util from '../../utils/util.js';
const URL ="https://api.douban.com/v2/movie/";
Page({

  /**
   * 页面的初始数据
   */
  data: {
      movieData:[],
      seachKeywords:''
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

  },
  seachMovie:function(){
    wx.showLoading({
      title:'搜索结果加载中'
    });
    console.log(this.data.seachKeywords)
    wx.request({
      url: URL+'search?q='+this.data.seachKeywords,
      // data: {},
      header: {'Content-type':'json'}, // 设置请求的 header , header 中不能设置 Referer
      // dataType: 'json', // 默认为 json。如果设置了 dataType 为 json，则会尝试对响应的数据做一次 JSON.parse
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: res=>{
        // success
        this.setData({'movieData':res.data.subjects});
        wx.hideLoading();
        console.log(res);
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  seachFocus:function(e){
    this.setData({'seachKeywords':e.detail.value})
  },
  getArticle:function(e){
    util.getArticle(e.currentTarget.id)
  }
})
