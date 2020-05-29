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

	$('.case__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="case__arrow case__arrow-prev" aria-hidden="true"><span></span></button>',
		nextArrow: '<button class="case__arrow case__arrow-next" aria-hidden="true"><span></span></button>',
		dots: true,
		customPaging: function() {
			return '<button class="case__dot"></button>';
		},
		infinite: true,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					dots: false
				}
			}
		]
	});

	$('.clients__slider').slick({
		slidesToShow: 5,
		slidesToScroll: 5,
		prevArrow: '<button class="clients__arrow clients__arrow-prev" aria-hidden="true"><span></span></button>',
		nextArrow: '<button class="clients__arrow clients__arrow-next" aria-hidden="true"><span></span></button>',
		dots: true,
		customPaging: function() {
			return '<button class="clients__dot"></button>';
		},
		infinite: true,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: false
				}
			},
			{
				breakpoint: 768,
				settings: "unslick"
			}
		]
	});

	$('.clients__button').click(function () {
		$('.clients__slide--hide').slideDown(400);
		$('.clients__button').addClass('clients__slide--hide');
	});
});

