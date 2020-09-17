$(document).ready(function () {
	var menuList = $('.header-mobile-nav__menu-list'),
			body = $('body');

	$('.header__hamburger').click(function () {
		$('.header-mobile-nav').addClass('move-menu set-opacity');
		menuList.addClass('set-opacity');
		body.addClass('body-scroll-lock');
	});

	$('.header-mobile-nav__close').click(function () {
		if (menuList.hasClass('move-submenu')) {
			menuList.removeClass('move-submenu set-opacity');
		}

		$('.header-mobile-nav').removeClass('move-menu set-opacity');
		body.removeClass('body-scroll-lock');
	});

	$('.header-mobile-nav__show-btn').each(function () {
		$(this).click(function () {
			$(this).find('.header-mobile-nav__arrow').toggleClass('header-mobile-nav__arrow--rotate');
			$(this).parent('.header-mobile-nav__row').siblings('.header-mobile-nav__submenu-list').slideToggle(300);
		});
	});
	
	$('.header-mobile-nav__next-menu').click(function () {
		$('.header-mobile-nav__second-submenu-list').hide();
		$(this).next().show();
		menuList.addClass('move-submenu set-opacity');
	});

	$('.header-mobile-nav__back').click(function () {
		menuList.removeClass('move-submenu');
	});

	/*$('.header__callme').click(function () {
		$.fancybox.open({
			src: '#callme',
			touch: false,
			scrolling: 'no',
			beforeShow: function(){
				$("body").css({'overflow-y':'hidden'});
			},
			afterClose: function(){
				$("body").css({'overflow-y':'visible'});
			}
		});
	});*/
});