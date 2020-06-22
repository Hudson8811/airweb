$(document).ready(function () {
	$('.stage__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="custom-arrow custom-arrow-prev custom-arrow--seo custom-arrow-prev--seo" aria-hidden="true"><span></span></button>',
		nextArrow: '<button class="custom-arrow custom-arrow-next custom-arrow--seo custom-arrow-next--seo" aria-hidden="true"><span></span></button>',
		dots: true,
		dotsClass: "custom-dots custom-dots--seo",
		customPaging: function(slider, index) {
			return '<button class="custom-dot custom-dot--seo">'+ (index + 1) + '</button>';
		},
		infinite: true
	}).on('swipe', function () {
		moveSlideProgress();
	});

	var dotLength = $('.custom-dots--seo li').length;

	$('.stage__progress-current').css('max-width', 'calc(100% / ' + dotLength + ' - 15px)');

	// Set padding between first dot
	$('.custom-dots--seo li').first().css('margin-left', 'calc(100% / ' + dotLength + ' - 15px)');

	// Move progressbar events
	$('.custom-dot--seo').click(function () {
		$('.stage__progress-current').css('max-width', 'calc(100% / ' + dotLength + ' * ' + ($(this).parent().index() + 1) + ')');
	});

	$('.custom-arrow--seo').click(function () {
		moveSlideProgress();
	});

	function moveSlideProgress() {
		$('.stage__progress-current').css('max-width', 'calc(100% / ' + dotLength + ' * ' + ($('.custom-dot--seo').parent('.slick-active').index() + 1) + ')');
	}

	$('.project-group__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="custom-arrow custom-arrow-prev project-group__custom-arrow-prev" aria-hidden="true"><span></span></button>',
		nextArrow: '<button class="custom-arrow custom-arrow-next project-group__custom-arrow-next" aria-hidden="true"><span></span></button>',
		dots: true,
		dotsClass: "custom-dots project-group__custom-dots",
		customPaging: function() {
			return '<button class="custom-dot"></button>';
		},
		infinite: true,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					arrows: false
				}
			}
		]
	});
});