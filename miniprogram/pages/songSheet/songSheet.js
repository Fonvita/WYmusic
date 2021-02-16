var baseUrl = require('../../utils/api.js');
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 歌单详情数据
        playInfo: [],
        // 歌单中SQ音质数据
        privileges: [],
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let id = options.id;
        // type(0-歌单、1-排行榜、2-专辑)
        let type = options.type;
        // let id = 2853229030
        // console.log("歌单id:" + id);
        if (type == 0) {
            this.getPlaylistDetail(id);
        }
        if (type == 1) {
            this.getTopList(id);
        }
    },


    /**
     * 获取排行榜数据
     */
    getTopList(id) {
        let that = this;
        wx.request({
            url: baseUrl + 'top/list?idx=' + id,
            header: {
                'Content-Type': 'application/json'
            },
            success: function (res) {
              console.log(res)
                if (res.data.code === 200) {
                    that.setData({
                        playInfo: res.data.playlist,
                        privileges: res.data.privileges,
                        loading: false
                    })
                }
            }
        })
    },

    /**
     * 获取歌单详情
     */
    getPlaylistDetail(id) {
        let that = this;
        wx.request({
            url: baseUrl + 'playlist/detail?id=' + id,
            header: {
                'Content-Type': 'application/json'
            },
            success: function (res) {
              // console.log(res.data)
                if (res.data.code === 200) {
                    that.setData({
                        playInfo: res.data.playlist,
                        privileges: res.data.privileges,
                        loading: false
                    })
                }
            }
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