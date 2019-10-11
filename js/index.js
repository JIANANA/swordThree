window.onload = function() {

  var circles = document.querySelectorAll('.list i');

  var li0 = document.querySelector('.sfq li');

  var ul = document.querySelector('.sfq');

  var num = 0;


  // -----------------------轮播图左右按钮淡入淡出-------------------------

  $('.part0').mouseover(function() {
    $('.part0 .right').stop().fadeIn(300);
    $('.part0 .left').stop().fadeIn(300);
  })



  $('.part0').mouseout(function() {
    $('.part0 .right').stop().fadeOut(300);
    $('.part0 .left').stop().fadeOut(300);
  })





  // -----------------------------轮播图原生js-------------------------------------

  for (var i = 0; i < circles.length; i++) {
    circles[i].index = i;
    circles[i].onmouseover = function() {
      for (var j = 0; j < circles.length; j++) {
        circles[j].classList.remove('current');
      }
      this.classList.add('current');
      num = this.index;
      ul.style.left = -this.index * li0.offsetWidth + 'px';
    }
  }



  // 右侧按钮
  var right = document.querySelector('.part0 .right');
  right.onclick = function() {
    if (num === 6) {
      ul.style.transition = 'none';
      num = 0;
      ul.style.left = 0;
    }
    num++;
    ul.style.left = -num * li0.offsetWidth + 'px';
    ul.style.transition = '.4s';

    // circles[num].classList.add('current');
    // circles[num - 1].classList.remove('current');

    for (var j = 0; j < circles.length; j++) {
      circles[j].classList.remove('current');
    }
    // circles[num].classList.add('current');
    if (num == 6) {
      // num = 0;
      circles[0].classList.add('current');
    } else {
      circles[num].classList.add('current');
    }
  }

  //   左侧按钮
  var left = document.querySelector('.part0 .left');
  left.onclick = function() {
    if (num === 0) {
      ul.style.transition = 'none';
      num = 6;
      ul.style.left = -num * li0.offsetWidth + 'px';
    }
    num--;
    ul.style.left = -num * li0.offsetWidth + 'px';
    ul.style.transition = '.4s';

    for (var j = 0; j < circles.length; j++) {
      circles[j].classList.remove('current');
    }

    if (num == 6) {
      // num = 0;
      circles[0].classList.add('current');
    } else {
      circles[num].classList.add('current');
    }

  }

  //自动轮播
  var timer = setInterval(function() {
      right.onclick();
    }, 3000)
    //鼠标移入停止自动
  var inner = document.querySelector('.part0');

  inner.onmouseover = function() {
      clearInterval(timer);
    }
    // ----------------鼠标移出恢复---------------------------------------
  inner.onmouseout = function() {
    timer = setInterval(function() {
      right.onclick();
    }, 3000)
  }


}

// -----------jQuery部分----------------------------

$(function() {

  // console.log($('.mp .load'));

  var num1 = 0;
  var num2 = 0;

  // ------------------------------门派切换部分---------------------------
  // tab切换
  $('.part4-1-c2 .tag').click(function() {
    var index = $(this).index();
    num1 = $(this).index();
    $('.mp .load').eq(index).stop().fadeIn(400).siblings().stop().fadeOut(400);
    $(this).addClass('act').siblings().removeClass('act');
  })


  // 右侧按钮
  $('.part4-1-b .next').click(function() {
    num1++;
    if (num1 > 13) { num1 = 0 }
    $('.mp .load').eq(num1).stop().fadeIn(400).siblings().stop().fadeOut(400);
    $('.part4-1-c2 .tag').eq(num1).addClass('act').siblings().removeClass('act');
  })

  // 左侧按钮
  $('.part4-1-b .pre').click(function() {
    num1--;
    $('.mp .load').eq(num1).stop().fadeIn(400).siblings().stop().fadeOut(400);
    $('.part4-1-c2 .tag').eq(num1).addClass('act').siblings().removeClass('act');
  })

  // 自动切换
  var timer = setInterval(function() {
      $('.part4-1-b .next').click();
    }, 3000)
    // 移入停止自动切换
  $('.part4-1-c').mouseover(function() {
      clearInterval(timer);
    })
    // 移出恢复自动切换
  $('.part4-1-c').mouseout(function() {
    timer = setInterval(function() {
      $('.part4-1-b .next').click();
    }, 3000)
  })


  //--------------------风景视频部分tab效果-------------------
  $('.part3 .layer').click(function() {
      var index = $(this).index();
      num2 = $(this).index();
      $('.part3-2 .world-bg').eq(index).stop().fadeIn(600).siblings().stop().fadeOut(600);
      $(this).addClass('act').siblings().removeClass('act');
    })
    // console.log(num2)


  // 自动切换
  var timer1 = setInterval(function() {
    num2++;
    // console.log(this);
    if (num2 > 5) { num2 = 0 }
    $('.part3-2 .world-bg').eq(num2).stop().fadeIn(600).siblings().stop().fadeOut(600);
    $('.part3-4-1 .layer').eq(num2).addClass('act').siblings().removeClass('act');
  }, 5000)




})