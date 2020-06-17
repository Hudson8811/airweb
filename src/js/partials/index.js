$(document).ready(function () {
	$('.first-screen--main .first-screen__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="first-screen__arrow first-screen__arrow-prev" aria-hidden="true"><span></span></button>',
		nextArrow: '<button class="first-screen__arrow first-screen__arrow-next" aria-hidden="true"><span></span></button>',
		dots: true,
		dotsClass: "custom-dots custom-dots--white",
		customPaging: function() {
			return '<button class="custom-dot custom-dot--white"></button>';
		},
		infinite: true
	});

	$('.case__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="case__arrow case__arrow-prev" aria-hidden="true"><span></span></button>',
		nextArrow: '<button class="case__arrow case__arrow-next" aria-hidden="true"><span></span></button>',
		dots: true,
		dotsClass: "custom-dots custom-dots--white",
		customPaging: function() {
			return '<button class="custom-dot custom-dot--white"></button>';
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
		prevArrow: '<button class="custom-arrow custom-arrow-prev" aria-hidden="true"><span></span></button>',
		nextArrow: '<button class="custom-arrow custom-arrow-next" aria-hidden="true"><span></span></button>',
		dots: true,
		dotsClass: "custom-dots",
		customPaging: function() {
			return '<button class="custom-dot"></button>';
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

	// cooperation block tabs
	if (window.matchMedia('(min-width: 1000px)').matches) {
		$('.cooperation__step').click(function () {
			if (!$(this).hasClass('cooperation__step--active')) {
				$('.cooperation__step').removeClass('cooperation__step--active');
				$(this).addClass('cooperation__step--active');
				$('.cooperation__content').hide().eq($(this).index() / 2).fadeIn(300);
			}
		});
	}
	// cooperation block accordion
	else {
		$('.cooperation__step').click(function () {
			$(this).next().slideToggle(300);
		});
	}
});

