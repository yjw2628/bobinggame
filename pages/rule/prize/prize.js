// pages/rule/prize/prize.js
Page({


    data: {
      artlist:[
        { imag:'/image/grade1.jpg',text:"一等奖\nkeep年卡一张"},
        { imag:'/image/grade11.jpg',text:"一等奖\n小米屏幕挂灯"},
        { imag:'/image/grade2.jpg',text:"二等奖\n闪迪64G U盘"},
        { imag:'/image/grade22.jpg',text:"二等奖\n三只松鼠礼包"},   
        { imag:'/image/grade3.jpg',text:"三等奖\n快速充电头"},
        { imag:'/image/grade33.jpg',text:"三等奖\n数据线"},
        { imag:'/image/grade333.jpg',text:"三等奖\n小米巨能写笔"},
        { imag:'/image/grade4.jpg',text:"四等奖\n汰渍洗衣液500ml"},
        { imag:'/image/grade44.jpg',text:"四等奖\n纸巾5包"},
        { imag:'/image/grade444.jpg',text:"四等奖\n笔记本3本"}
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

    },
    jumpRule:function(){
        wx.navigateBack({
          delta: 1,
        })
    }
})
