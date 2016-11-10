//获取应用实例
var app = getApp()
var that;
Page({
  data: {
    opacity:0.3,
    splash: {},
    screenHeight: 0,
    screenWidth: 0,
    dialogBgAlpha:0,
    dialogAlpha:0
  },
 
  onLoad: function () {
    that = this;
    wx.getSystemInfo( {
      success: function( res ) {
        that.setData( {
          screenHeight: res.windowHeight,
          screenWidth: res.windowWidth,
        });
      }
    });
  },
  onReady: function() {
  },
  onShow: function() {
  },
  onHide: function() {
  },
  onUnload: function() {
  },
  showImageDialog:function () {
    showImageDialog();
  },
  chooseImage:function(){
    that.setData({showDialog:false});
    hideImageDialog();
  },
  delImage:function(){
    that.setData({showDialog:false});
    hideImageDialog();
  },
})


var chooseImg;
var interval = 20;
function hideImageDialog(){
  scaleBgAlpha(false, 0.05);
  scaleAlpha(false, 0.05);
}
function showImageDialog(index){
  chooseImg = index;
  that.setData({showDialog:true});
  scaleBgAlpha(true, 0.01);
  scaleAlpha(true, 0.08);
}
/**
 * 定时控制图片透明度
 */
function scaleBgAlpha(isShow, step) {
  var timer = setInterval(function () {
    if(isShow){
      that.setData({dialogBgAlpha: that.data.dialogBgAlpha + step});
      if (that.data.dialogBgAlpha >= 1) {
        clearInterval(timer);
      }
    } else {
      that.setData({dialogBgAlpha: that.data.dialogBgAlpha - step > 0 ? that.data.dialogBgAlpha - step:0});
      if (that.data.dialogBgAlpha <= 0) {
        clearInterval(timer);
      }
    }
  }, interval);
}

/**
 * 定时控制图片透明度
 */
function scaleAlpha(isShow, step) {
  var timer = setInterval(function () {
    if(isShow){
      that.setData({dialogAlpha: that.data.dialogAlpha + step});
      if (that.data.dialogAlpha >= 1) {
        clearInterval(timer);
      }
    } else {
      that.setData({dialogAlpha: that.data.dialogAlpha - step > 0 ? that.data.dialogAlpha - step:0});
      if (that.data.dialogAlpha <= 0) {
        clearInterval(timer);
      }
    }
  }, interval);
}
