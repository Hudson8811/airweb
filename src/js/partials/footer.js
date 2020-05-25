$(document).ready(function () {
	$('.footer__expand').click(function () {
		$('.footer__expand-arrow').toggleClass('footer__expand-arrow--rotate');
		$('.footer__column-menu--hide').slideToggle(300);
	})
});