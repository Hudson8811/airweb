$(document).ready(function () {
	$('.history__button').click(function () {
		$('.history__list-item--hide').slideDown(400);
		$(this).hide();
	});
});