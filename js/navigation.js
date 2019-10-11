$(function () {
	$(window).scroll(function () {
		var topVal = $(document).scrollTop();
		if (topVal >= $('.picture').offset().top) {
			$('.go-top').fadeIn();
		} else {
			$('.go-top').fadeOut();
		}
	});
});
