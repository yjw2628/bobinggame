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
        this_level1:'您的结果为：',
        //  存储当前随机数组
        NumberArr:[],
    },                           

    play:function(one,two,three,four,five,six,NumberArr){

        var self=this;     
        var  this_level='';  
        // 等级划分
        var level = {
            one: '状元插金花！',
            two: '六红六子', // 六子
            three: '五红五子', // 五子
            four: '普通状元',
            five: '对堂',
            six: '三红',
            seven: '四进',
            eight: '二举',
            nine: '一秀',
            ten: '没有奖哦亲~~~~~'
        };
        var this_level;


        //存储当前 “四” 的个数
        var isfour = 0;

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
      // 数据进入数组，排序
        NumberArr=[0];
        NumberArr.push(one+1,two+1,three+1,four+1,five+1,six+1);
        NumberArr.sort();
                
        //四的个数
        for (var i = 0,isfour=0; i < NumberArr.length; i++) {
            if (NumberArr[i] == 4) {
                isfour = isfour + 1;
         }
        }
        // 判断 “四” 的个数属于哪一等级;
        switch (isfour) {
            case 1:
                for (var i = 0; i < NumberArr.length; i++) {
                //存储当前相同的数量，判断是否为四进
                var ContrastArr = [];
                for (var j = 0; j < NumberArr.length; j++) {
                    if (NumberArr[i] == NumberArr[j]) {
                        ContrastArr.push(NumberArr[j]);
                    }
                }
            }
            // 等到上面遍历执行完再进行判断属于哪个级别
            if (ContrastArr.length === 4) {
                this_level = level.seven; //四进
                break;
            } else if (ContrastArr.length === 5) {
                this_level = level.three; //五红
                break;
            } else if (ContrastArr.length === 6) {
                this_level = level.two; //六红
                break;
            } else {
                // 判断一下，是 "对堂"" or ”一秀“，对堂就是顺子，123456，一秀就是一个只有4；
                var isContinuityArray = false;
                var array = NumberArr;
                var arrayCount = array.length;
                for (var i = 0; i < arrayCount; i++) {
                    var currentArr = Number(array[i]) + 1;
                    var nestArr = Number(array[i + 1]);
                    if (i + 1 == arrayCount) {
                        currentArr = Number(array[i]);
                        nestArr = Number(array[i]);
                    }
                    if (currentArr != nestArr) {
                        isContinuityArray = false;
                        break;
                    } else {
                        isContinuityArray = true;
                    }
                }
                if (isContinuityArray) {
                    this_level = level.five;
                    break;
                } else {
                    this_level = level.nine;
                    break;
                }
            };
            break;
        case 2:
            for (var i = 0; i < NumberArr.length; i++) {
                var ContrastArr = [];
                for (var j = 0; j < NumberArr.length; j++) {
                    if (NumberArr[i] == NumberArr[j]) {
                        ContrastArr.push(NumberArr[j]);
                    }
                }
                // 判断是 4进 or 二举
                if (ContrastArr.length === 4) {
                    this_level = level.seven;
                    break;
                } else {
                    this_level = level.eight;
                }
            };
            break;
        case 3:
            this_level = level.six;
            break;
        case 4:
            // 判断是 "普通状元" or "状元插金花"，普通就是4个四，插金花就是  4个四 + 2个1 ；
            var one1 = 0;
            for (var i = 0; i < NumberArr.length; i++) {
                if (NumberArr[i] === 1) {
                    one1 = one1 + 1;
                }
            }
            if (one1 == 2) {
                this_level = level.one; // 插金花
            } else {
                this_level = level.four; //普通状元
            }
            break;
        case 5:
            this_level = level.three; // 五红五子
            break;
        case 6:
            this_level = level.two; //六红六子
            break;
        default:
            // 就是页面都没有四,来判断是否属于 “五子” 和 “六子” 和 “四进” 中的哪一种;
            for (var i = 0; i < NumberArr.length; i++) {
                var ContrastArr = [];
                for (var j = 0; j < NumberArr.length; j++) {
                    if (NumberArr[i] == NumberArr[j]) {
                        ContrastArr.push(NumberArr[j]);
                    }
                }
                if (ContrastArr.length == 4) {
                    this_level = level.seven; //四进
                    break;
                } else if (ContrastArr.length == 5) {
                    this_level = level.three; //五子
                    break;
                } else if (ContrastArr.length == 6) {
                    this_level = level.two; //六子
                    break;
                } else {
                    this_level = level.ten;
                }
            };
            break;
         }

         self.setData({
             this_level1:this_level,
         })
         console.log(self.data.this_level1);

        },20)  
            self.setData({
                btn:".btnEnd",
                texts:"停止",
                flag:false,    

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