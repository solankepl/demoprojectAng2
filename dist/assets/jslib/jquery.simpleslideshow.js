//created by pavan solanke 
(function ($) {
    $.simpleSlideShow = function (selector, settings) {

        var config = {
            'delay': 4000,
            'fadeSpeed': 500
        };
        if (settings) {
            $.extend(config, settings);
        }


        var obj = $(selector);
        var img = obj.children('img');
        var count = img.length;
        var i = 0;


        img.eq(0).show();

        var timer = setInterval(startSideShow, config.delay);

        function startSideShow() {
            img.eq(i).fadeOut(config.fadeSpeed);
            i = (i + 1 == count) ? 0 : i + 1;
            img.eq(i).fadeIn(config.fadeSpeed);
            clearInterval(timer); //clear interval
            timer = setInterval(startSideShow, config.delay); //start it again   
        }


        return this;
    };
})(jQuery);