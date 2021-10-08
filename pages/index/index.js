// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        showModal: false
    },
    // Roomname:function(){
    //     var x,text;
    //     x = getElementById("return").value;
    //     if(x)text="房间名不可为空";
    //     document.getElementById("return").innerHTML = text;
    // },

    submit: function() {
        this.setData({
        showModal: true
        })
    },

    preventTouchMove: function() {

    },


    cancel: function() { 
        this.setData({
        showModal: false
        })
    },
    go:function(){
        wx.navigateTo({
          url: '/pages/index/diyroom/diyroom',
        })
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

    gotoDiyroom:function(){
        // wx.navigateTo({
        //   url: '/pages/index/diyroom/diyroom',
        // })
        this.setData({
            showModal: true
            })
    },
    gotoRoomhall:function(){
        wx.showToast({
            title: '该功能未上线！',
            icon: 'none',
            duration: 1500
          })
        // wx.navigateTo({
        //   url: '/pages/index/roomHall/roomHall',
        // })
    }
})