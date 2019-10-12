$(document).ready(function () {



    //  Header
    $(".headli").mouseover(function () {
        $(this).find(".in").stop().slideDown(300);
    });
    $(".headli").mouseout(function () {
        $(this).find(".in").stop().slideUp(300).hide();;
    })



    //  ===================================================================================================================================   
    //tab栏的函数


    // 上面li显示时候的类名li_on
    // 下面div显示时候的类名div_on
    function tab(li, div, li_on, div_on) {
        var count = 0;
        //创建点击事件
        li.click(function () {
            // console.log($(this));

            //上面li的下划线和小箭头
            $(this).siblings().children("a").removeClass("nowfont").siblings(".arr").hide();
            $(this).children("a").addClass("nowfont").siblings(".arr").slideDown(300);

            //tab上面li样式切换
            $(this).addClass("nowfont").siblings().removeClass("nowfont");

            //获取目前显示的div的索引值index
            var index = $("." + li_on).index();

            //获取点击的li的索引值li_index
            var li_index = $(this).index();

            $(this).addClass(li_on).siblings().removeClass(li_on);


            //判断点击和显示的index的大小

            //一、如果点击的li_index>显示的index
            if (li_index > index) {

                //让当前显示的div盒子左滑移出，移出后定位left：-自身盒子的宽度
                $("." + div_on).show().animate({
                    left: - $("." + div_on).outerWidth(true)
                })

                //让当前显示的div加上add类名，并且显示left为0
                div.eq(li_index).addClass(div_on).show().animate({
                    left: 0
                }).siblings().removeClass(div_on);

                /* 
                    断层问题:
                        代码写完以后在第一次点击的时候会出现当前显示的第一个div盒子突然隐藏，出现断层，不是无缝连接，输出div的index是-1
                        并且只有第一次点击的时候会出现这样的情况，第二次点击及以后并不会有这样的情况
                        解决方案：在点击事件之前声明一个变量count，每次点击的时候，手动设置当前显示的div的索引值是0
                
                */

                if (count == 0) {
                    index = 0;
                    count++;
                }
                //让之前显示的div和现在显示的div的之间的div位置移动自身宽度的负值
                for (var i = index + 1; i < li_index; i++) {
                    div.eq(i).hide().css("left", -$("." + div_on).outerWidth(true));
                }

            }

            //二、如果点击的li_index<显示的index
            else if (li_index < index) {

                //让点击之前显示的div的left值变成+自身宽度
                $("." + div_on).show().animate({
                    left: +$("." + div_on).outerWidth(true)
                })

                //让点击的li的索引值对应的div的left变成0
                div.eq(li_index).addClass(div_on).show().animate({
                    left: 0
                }).siblings().removeClass(div_on);

                //让之前显示的div和现在显示的div的之间的div位置移动自身宽度
                for (var i = li_index + 1; i < index; i++) {
                    div.eq(i).hide().css("left", $("." + div_on).outerWidth(true));
                }
            }
        })
    }
    // ================================================================================================================================



    // 热门活动左边调用tab栏函数
    var li = $(".actively");
    var div = $(".zuohua");
    var li_on = 'onin';
    var div_on = 'add';
    tab(li, div, li_on, div_on);




    //热门活动右边调用tab函数
    var right_top_li = $(".newtop").find(".up").find("li");
    var right_div = $(".newtop").find(".bomin").find("ul");
    var right_li_on = "avtive_right_up_on";
    var right_div_on = "avtive_right_div_on";
    tab(right_top_li, right_div, right_li_on, right_div_on);



    //同人区域调用tab栏函数
    var tongren_li = $(".tongren").find(".in").find("li");
    var tongren_div = $(".picture_ul").find("li");
    var tongten_li_on = "tongren_liup";
    var tongten_div_on = "tongren_width";
    tab(tongren_li, tongren_div, tongten_li_on, tongten_div_on);



    //精彩视频调用tab栏函数
    var video_li = $(".videoleft_top").find("li");
    var video_ul = $(".picture>ul");
    var video_li_on = "video_liup";
    var video_div_on = "video_width";
    tab(video_li, video_ul, video_li_on, video_div_on);



    //精彩直播调用tab栏函数
    var play_li = $(".videoright_top").find(".in").children(".week");
    var play_div = $(".videoright_bt_contain").find(".videoright_bt_in");
    var play_li_on = "play_liup";
    var play_div_on = "play_width";
    tab(play_li, play_div, play_li_on, play_div_on);





    //合作模块调用tab
    var co_li = $(".colefttop").find("li");
    var co_div = $(".coleftbt_box").find("li");
    var co_li_on = "co_loup";
    var co_div_on = "co_width";
    tab(co_li, co_div, co_li_on, co_div_on);





    //配置要求调用tab
    var pz_li = $(".coright_top").find(".in").find("li");
    var pz_div = $(".coright_bigbox").find(".coright_box");
    var pz_li_on = "pz_liup";
    var pz_div_on = "pz_width";
    tab(pz_li, pz_div, pz_li_on, pz_div_on);






    //电脑配置鼠标移入事件
    $(".coright_middle").find("li").mouseover(function () {
        $(this).addClass("nowfont").siblings("li").removeClass("nowfont");
        $(this).parents(".coright_middle").siblings(".coright_bt").find("ul").eq($(this).index()).show().siblings("ul").hide();
    })






    //遮罩层文字鼠标移入事件
    $(".pic").find(".pp").mouseover(function () {
        $(this).find(".text").css("height", 90);
    })
    $(".pic").find(".pp").mouseout(function () {
        $(this).find(".text").css("height", 0);
    })




    //进页面遮罩层的点击关闭事件
    $(".close").click(function () {
        $(".img").css('transform', 'scale(0)').css('left', '-2000px');
        $('.zhezhao').fadeOut(500);
    })






















})
























