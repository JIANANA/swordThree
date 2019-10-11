
    showDiv();
	function showDiv () {
		
		var topVal = $(document).scrollTop();
		// 判断
		if (topVal >= $('.swiper-container').offset().top) {
			$('.fixbox').fadeOut();
		} else {
			$('.fixbox').fadeIn();
		}
	}

	$(window).scroll(function () {
        showDiv();
        
	});


	$('.bowang a').mouseover(function(){
		$(this).siblings().stop().fadeOut(400,0.5);
	});
	$('.bowang a').mouseout(function(){
		$(this).siblings().stop().fadeIn(400,1);
	});
	$().click(function(){

	});


	$('.backTop').toTop({
		//options with default values
		autohide: true,
		offset: 420,
		speed: 500,
		right: 15,
		bottom: 30
	});    