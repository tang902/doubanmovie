import util from '../../utils/util.js';
var pagenum=20;
const query="top250?count=";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieData:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    util.getMovieList(pagenum,query,this)
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
  onPullDownRefresh:function(){
    console.log("下拉刷新!");
    pagenum=20;
    util.getMovieList(pagenum,query,this);
  },
  onReachBottom:function(){
    console.log('上拉了')
    pagenum += 5;
    if (pagenum < 100) {
      util.getMovieList(pagenum,query,this);
    } else {
      pagenum += 100 - pagenum;
      util.getMovieList(pagenum,query,this);
      wx.showLoading({
        title: '没有了',
        mask: 'true'
      });
      setTimeout(function () {
        wx.hideLoading();
      }, 1000)
    }
  },
  getArticle:function(e){
    util.getArticle(e.currentTarget.id)
  }
})
