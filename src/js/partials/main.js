$(document).ready(function () {
	$('.slider__container').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: '<button class="slider__arrow slider__arrow-prev" aria-hidden="true"><span></span></button>',
		nextArrow: '<button class="slider__arrow slider__arrow-next" aria-hidden="true"><span></span></button>',
		infinite: true,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					arrows: false
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					arrows: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
					variableWidth: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					variableWidth: true
				}
			}
		]
	});
});

