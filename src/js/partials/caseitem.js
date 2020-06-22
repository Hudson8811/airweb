$(document).ready(function () {
    if ($('.js-ci-result-slider').length > 0) {
        $('.js-ci-result-slider').slick({
            arrows: true,
            dots: true,
            prevArrow: '<div class="ci-results-arrow ci-results-arrow--prev"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" fill="#c3c4ce"/><path d="M0 0h24v24H0V0z" fill="none"/></svg></div>',
            nextArrow: '<div class="ci-results-arrow ci-results-arrow--next"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="#c3c4ce"/><path d="M0 0h24v24H0V0z" fill="none"/></svg></div>'
        });
    }
});