$(document).ready(function () {
    if ($('.js-ci-result-slider').length > 0) {
        $('.js-ci-result-slider').slick({
            arrows: true,
            dots: true,
            prevArrow: '<div class="ci-results-arrow ci-results-arrow--prev"></div>',
            nextArrow: '<div class="ci-results-arrow ci-results-arrow--next"></div>'
        });
    }
});