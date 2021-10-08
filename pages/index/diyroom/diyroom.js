// pages/index/diyroom/diyroom.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        result:"",
        texts:"开始博饼",
        dice1:"/image/dice1.png",
        dice2:"/image/dice2.png",
        dice3:"/image/dice3.png",
        dice4:"/image/dice4.png",
        dice5:"/image/dice5.png",
        dice6:"/image/dice6.png",
        btn:".btnStart",
        flag:true,
        img:[
            "/image/dice1.png",
            "/image/dice2.png",
            "/image/dice3.png",
            "/image/dice4.png",
            "/image/dice5.png",
            "/image/dice6.png"
        ],
        one:0,
        two:0,
        three:0,
        four:0,
        five:0,
        six:0,
        this_level1:'',
    },
    play:function(one,two,three,four,five,six){
        var self=this; 
        if(this.data.flag)
        {
            self.timer=setInterval(function(){
                one = Math.floor(Math.random()*6);
                two = Math.floor(Math.random()*6);
                three = Math.floor(Math.random()*6);
                four = Math.floor(Math.random()*6);;
                five = Math.floor(Math.random()*6);
                six = Math.floor(Math.random()*6);
                self.setData({
                    dice1:self.data.img[one],
                    dice2:self.data.img[two],
                    dice3:self.data.img[three],
                    dice4:self.data.img[four],
                    dice5:self.data.img[five],
                    dice6:self.data.img[six],
                     
                    },
                )
           console.log(one);
            console.log(two);
            },400)
            self.setData({
                btn:".btnEnd",
                texts:"停止",
                flag:false,
                this_level1:' ',
            })

        } else{
            clearInterval(self.timer);
 
            

            self.setData({
                btn:".btnStart",
                texts:"开始博饼",
                flag:true, 
            })
        }

    },
})