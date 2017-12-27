import util from '../../utils/util.js';
var pagenum=20;
const query="in_theaters?count=";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
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
    pagenum=20;
    util.getMovieList(pagenum,query,this);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (e) {
    console.log("滚到底了");
    pagenum+=5;
    if (pagenum<39){
      util.getMovieList(pagenum,query,this);
    }else{
      pagenum+=39-pagenum;
      util.getMovieList(pagenum,query,this);
      wx.showLoading({
        title:'没有了',
        mask:'true'
      });
      setTimeout(function(){
        wx.hideLoading();
      },1000)
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  upper:function(e){
    console.log('upper触发了');
  },
  lower:function(e){
    console.log('lower触发了');
  },
  getArticle:function(e){
    util.getArticle(e.currentTarget.id)
  }
})
