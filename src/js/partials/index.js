$(document).ready(function () {
	$('.first-screen__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="first-screen__arrow first-screen__arrow-prev" aria-hidden="true"><span></span></button>',
		nextArrow: '<button class="first-screen__arrow first-screen__arrow-next" aria-hidden="true"><span></span></button>',
		dots: true,
		customPaging: function() {
			return '<button class="first-screen__dot"></button>';
		},
		infinite: true
	});
});

