
(function ($) {

    //Таймер обратного отсчета

    // Количество секунд в каждой единице времени
    var days = 24 * 60 * 60,
        hours = 60 * 60,
        minutes = 60;

    $.fn.countdown = function (prop) {

        var options = $.extend({
            callback: function () {},
            timestamp: 0
        }, prop);

        var left, d, h, m, s;




        (function tick() {
            // осталось времени
            left = Math.floor((options.timestamp - (new Date())) / 1000);

            if (left < 0) {
                left = 0;
            }

            // осталось дней
            d = Math.floor(left / days);
            left -= d * days;

            // часов
            h = Math.floor(left / hours);
            left -= h * hours;

            // минут
            m = Math.floor(left / minutes);
            left -= m * minutes;

            // секунд
            s = left;

            options.callback(d, h, m, s);

            setTimeout(tick, 1000);
        })();


        return this;
    };
})(jQuery);
/*
function getNumEnding(iNumber, aEndings)
{
    var sEnding, i;
    iNumber = iNumber % 100;
    if (iNumber>=11 && iNumber<=19) {
        sEnding=aEndings[2];
    }
    else {
        i = iNumber % 10;
        switch (i)
        {
            case (1): sEnding = aEndings[0]; break;
            case (2):
            case (3):
            case (4): sEnding = aEndings[1]; break;
            default: sEnding = aEndings[2];
        }
    }
    return sEnding;
}*/

$(document).ready(function () {
    var countdown1 = $('[data-time-out]');
    countdown1.each(function(){
        var thisCD = $(this);
        var ts = new Date(thisCD.attr('data-time-out')),
        newYear = true;
    if ((new Date()) > ts) {
        // *1000 - время должно быть в миллисекундах
        ts = (new Date()).getTime() + 10 * 24 * 60 * 60 * 1000;
        newYear = false;
    }

    thisCD.countdown({
        timestamp: ts,
        callback: function (days, hours, minutes, seconds) {
            thisCD.find('.js-stock-countdown-d').html(days.toString().padStart(2,0));
            thisCD.find('.js-stock-countdown-h').html(hours.toString().padStart(2,0));
            thisCD.find('.js-stock-countdown-m').html(minutes.toString().padStart(2,0));
            thisCD.find('.js-stock-countdown-s').html(seconds.toString().padStart(2,0));
        }
    });
    });


});