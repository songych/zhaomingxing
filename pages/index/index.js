//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        bannerImgs: [  
            {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523877086276&di=72f70e807b31820766636c64a5467ad6&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4d086e061d950a7b9138ff1000d162d9f3d3c9d1.jpg'},  
            {url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'},
        ],
        currentSwiper: 0,  
    },
    onLoad: function () {
      
    },
    swiperChange: function (e) {  
        this.setData({  
            currentSwiper: e.detail.current  
        })  
    } 
})
