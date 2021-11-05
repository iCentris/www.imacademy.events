(function ($) {
    'use strict';
    jQuery(function () {
        jQuery('#defaultCountdown').countdown({
            until: new Date(2021, 10, 14, 23, 59),
            timezone: -4,
        }); // year, month, day, hour
    });
})(jQuery);
