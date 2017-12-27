const URL ="https://api.douban.com/v2/movie/";
function getMovieList(pageNum,query,_this){
  wx.showLoading({
    title:'加载中····'
  });
  wx.showNavigationBarLoading();
  wx.request({
    url: URL + query + pageNum,
    header:{'Content-Type':'json'},
    success:(res)=>{
        console.log(res);
        _this.setData({'movieData':res.data.subjects});
        wx.hideLoading();
        wx.setNavigationBarTitle({
          title:res.data.title,
        });
        wx.hideNavigationBarLoading();
    }
  })
}
function getArticle(ID){
  wx.navigateTo({
    url: '../article/article?ID='+ID
  })
}
module.exports = {
  getMovieList: getMovieList,
  getArticle:getArticle
}
