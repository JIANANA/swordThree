// 模态框
// --------- 轮播
var count = 0;
function zSlider() {
    if (count > 3) {
        count = 0;
    }
    $('.right_slides_item').eq(count).addClass('current').siblings().removeClass('current');
    count++;
}
autoScrollFn = setInterval(() => {
    zSlider();
}, 1000);

// -----------注册
$('.register').mouseover(function () {
    $(this).css('cursor', 'pointer');
});
$('.register .tab_con').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var index = $(this).index();
    $('#tab_content .tab').eq(index).css('display', 'block').siblings().css('display', 'none');
})
$('.eye_box').mouseover(function () {
    $(this).siblings('.eye').addClass('active');
})
$('.eye_box').mouseout(function () {
    $(this).siblings('.eye').removeClass('active');
})
$('.eye').hover(function () {
    $(this).addClass('active');
}, function () {
    $(this).removeClass('active');
})
$('.id_code').mouseover(function () {
    $(this).css('cursor', 'pointer')
})
$('.id_code').click(function () {
    $(this).css('background', 'green');
    var time = 5;
    $(this).text(time);
    var that = this;
    flag = setInterval(() => {
        time--;
        if (time < 1) {
            $(that).css('background', '#c6a751')
            $(that).text('发送验证码');
            clearInterval(flag);
            return;
        }
        $(that).text(time);
    }, 1000);
})
$('.submit').hover(function () {
    $(this).addClass('active');
}, function () {
    $(this).removeClass('active');
})
// ------------定义正则
var regTel = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
var regCode = /^\d{6}$/;
var regPwd = /(?!^\d+$)(?!^[A-Za-z]+$)(?!^_+$)^\w{8,32}$/;
var regUser = /^\w[0-9a-zA-Z_]{4,18}/;
var regRealName = /[\u4e00-\u9fa5]/;
var regIdCard = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
// ------------检测正则
function regFn(obj, reg) {
    obj.blur(function () {
        if (reg.test($(this).val())) {
            // console.log(1);
            $(this).siblings('.error-icon').removeClass('active');
            $(this).parent().removeClass('has-error');
            $(this).parent().addClass('has-success');
            $(this).siblings('.control-label').removeClass('active');
            return true;
        } else {
            // console.log(0);
            $(this).siblings('.error-icon').addClass('active');
            $(this).parent().removeClass('has-success');
            $(this).parent().addClass('has-error');
            $(this).siblings('.control-label').addClass('active');
            return false;
        }
    })
}
regFn($('.tel'), regTel);
regFn($('.code'), regCode);
regFn($('.pwd'), regPwd);
regFn($('.user'), regUser);
regFn($('.real_name'), regRealName);
regFn($('.id_card'), regIdCard);
// -------------提交
var submit = document.querySelector('.submit');
var leftConInps = document.querySelectorAll('.tab_content_left .con_inp');
$('.submit1').click(function () {
    var arr1 = [];
    var flag = true;
    $('.tab_content_left .con_inp').blur();
    $('.error-icon').each((i, e) => {
        var newEl = $(e).hasClass('active');
        if (newEl) {
            arr1.push(newEl);
        }
    })
    if (arr1.length) {
        flag = false;
    }
    if (flag) {
        // alert('注册成功');
        location.href = './offweb.html';
    } else {
        alert('注册失败');
    }
});
$('.submit2').click(function () {
    var arr2 = [];
    var flag = true;
    $('.tab_content_right .con_inp').blur();
    $('.control-label').each((i, e) => {
        var newEl = $(e).hasClass('active');
        if (newEl) {
            arr2.push(newEl);
        }
    })
    console.log(arr2);
    if (arr2.length) {
        flag = false;
    }
    if (flag) {
        // alert('注册成功');
        location.href = './offweb.html';
    } else {
        alert('注册失败');
    }
});