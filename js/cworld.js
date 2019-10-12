$(function () {
    //  ===================================================================================================================================   
    // 音乐导航栏缩放功能
    $('.list li img').hover(function () {
        $(this).toggleClass('trscale')
    });



     //  ===================================================================================================================================   
    // 点击音乐禁止使用
    var flag = 1;
    $('.music').click(function () {
        // 设置一个开关记录当前音乐的状态
        if (flag == 1) {

            // src是image的固有属性
            $(this).prop('src', './images/page1/audio_pause.733099db.png');
            $(this).css('animation', '0');
            flag = 0;
        } else {
            $(this).prop('src', './images/page1/audio_play.ca9ae290.png');
            $(this).css('animation', 'ani 4s linear infinite');
            flag = 1;
        }
    });



     //  ===================================================================================================================================   
    //首页导航旋转按钮功能
    $('.menusec a').mouseover(function () {
        $(this).addClass('homepage-pagination-i').parent().siblings().children('a').removeClass('homepage-pagination-i');
        $(this).children('span').css('transform', ' rotate(360deg)');
    });




     //  ===================================================================================================================================   
    // 定义数组存储图片地址
    var arr = [
        'images/page2/role-big-bg-1.718d80b8.jpg',
        'images/page2/role-big-bg-2.7b71d15e.jpg',
        'images/page2/role-big-bg-3.a6eba6ed.jpg'
    ]
    $('.world-video-box').hover(function () {
        // 国风大世界缩放功能
        $(this).addClass('trscale');
        //  国风大世界背景图切换
        var i = $(this).index();
        //  解决背景闪屏问题
        // let img = new Image();
        // img.src = arr[i];
        // img.onload = function () {
        //     $('.section2').css('background', 'url(' + img.src + ') 50% no-repeat');
        //     $('.section2').css('background-size', 'cover');
        // }
        changbg('.section2', arr, i);
    }, function () {
        $(this).removeClass('trscale');
    });



    //  ===================================================================================================================================   
    // 轮播图功能

    // 轮播图切换背景
    var lunbo = ['./images/page3/school-big-bg/penglai.5f4b7f4b.jpg',
        './images/page3/school-big-bg/badao.c5b88451.jpg',
        './images/page3/school-big-bg/changge.aea4df6c.jpg',
        './images/page3/school-big-bg/cangyun.fef0c1d8.jpg',
        './images/page3/school-big-bg/gaibang.ea0fca77.jpg',
        './images/page3/school-big-bg/mingjiao.2705550c.jpg',
        './images/page3/school-big-bg/tangmen.eea31e37.jpg',

        './images/page3/school-big-bg/wudu.d3b42a37.jpg',
        './images/page3/school-big-bg/cangjian.e5d81e18.jpg',
        './images/page3/school-big-bg/tiance.836296b4.jpg',
        './images/page3/school-big-bg/chunyang.66b3b9b2.jpg',
        './images/page3/school-big-bg/shaolin.0009db7b.jpg',
        './images/page3/school-big-bg/qixiu.c2b58348.jpg',
        './images/page3/school-big-bg/wanhua.2d3af9b1.jpg',
    ];
    $('.school-slide').hover(function () {
        // 鼠标悬停上移
        $(this).find('a>img').addClass('traup');

        //鼠标悬停实现边框;
        $(this).find('a>img').css('border', '1px solid #b49c5d');

        // 按钮旋转功能
        $(this).find('.school-logo-sta').addClass('school-logo-active');

        // 获取鼠标所在的索引值
        var i = $(this).index();

        // 调用背景切换函数
        changbg('.section3', lunbo, i);

    }, function () {
        // 鼠标悬停上移
        $(this).find('a>img').removeClass('traup');

         //鼠标悬停实现边框;
        $(this).find('a>img').css('border', '1px solid transparent');

         // 按钮旋转功能
        $(this).find('.school-logo-sta').removeClass('school-logo-active');
    });





    //  ===================================================================================================================================   
    // 四大体型向上移动
    $('.role-habitus-box img').hover(function () {
        // 鼠标悬停上移
        $(this).addClass('traup');

        //鼠标悬停实现边框
        $(this).css('border', '2px solid #b49c5d').parent().siblings('.role-habitus-box').children('img').css('border', '2px solid transparent');
    
    }, function () {

        $(this).removeClass('traup');
    });








     //  ===================================================================================================================================   
    // 四大体型切换背景
    var arr2 = ['./images/page4/role-bg/role-1.8213c563.jpg',
        './images/page4/role-bg/role-2.2a7ebc20.jpg',
        './images/page4/role-bg/role-3.f24712ae.jpg',
        './images/page4/role-bg/role-4.0b9df437.jpg'
    ];
    var arr3 = ['./images/page6/homepage/bg-box/bg-1.4dd69cc9.jpg',
        './images/page6/homepage/bg-box/bg-2.02ca0b39.jpg',
        './images/page6/homepage/bg-box/bg-3.bbc0b0bc.jpg',
        './images/page6/homepage/bg-box/bg-4.38e3da8e.jpg'
    ]
    $('.role-habitus-box').mouseover(function () {
        var i = $(this).index();
        // 调用切换背景函数
        changbg('.section4 .slide4', arr2, i);
        changbg('.section6', arr3, i);
    });

    //  ===================================================================================================================================   
    // 帮派背景切换
    var arr4 = ['./images/page7/game-content/game-bg/bg-bangpai.1b1fc241.jpg',
        './images/page7/game-content/game-bg/bg-daxia.f62d3f2f.jpg',
        './images/page7/game-content/game-bg/bg-haoyou.4fe3079c.jpg',
        './images/page7/game-content/game-bg/bg-shitu.8cc4ddb3.jpg'
    ]
    $('.gather-box img').hover(function () {
        $(this).siblings().stop().fadeTo(400, 0.5);
        var i = $(this).index();
        //调用切换背景函数   
        changbg('.section7 .slide7', arr4, i);
    }, function () {
        // 鼠标离开，其他li 透明度改为 1
        $(this).siblings().stop().fadeTo(400, 1);
    });


    
    // 背景切换功能函数封装
    function changbg(ele, arr, i) {
        let img = new Image();
        // console.log(img);
        img.src = arr[i];
        // console.log(arr[i]);
        img.onload = function () {
            // console.log(arr[i]);
            $(ele).css('transition', 'all 1s');
            $(ele).css('background', 'url(' + img.src + ') 50% no-repeat');
            // console.log(img.src);
            $(ele).css('background-size', 'cover');
        }
    }


    // let img=new Image();
    // console.log(img);
});
