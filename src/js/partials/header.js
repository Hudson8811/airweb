$(document).ready(function () {
	$('.header__hamburger').click(function () {
		$('.header-mobile-nav').addClass('header-mobile-nav--move');
		$('body').addClass('body-scroll-lock');
	});

	$('.header-mobile-nav__close').click(function () {
		$('.header-mobile-nav').removeClass('header-mobile-nav--move');
		$('body').removeClass('body-scroll-lock');
	});

	$('.header-mobile-nav__show-btn').each(function () {
		$(this).click(function () {
			$(this).children('.header-mobile-nav__show-btn-wrapper').children('.header-mobile-nav__arrow').toggleClass('header-mobile-nav__arrow--rotate');
			$(this).next().slideToggle(300);
		});
	});
});