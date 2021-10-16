(function ($) {
    'use strict';
    jQuery(function () {
        jQuery('#defaultCountdown').countdown({
            until: new Date(2021, 10, 4, 8),
            timezone: -4,
        }); // year, month, day, hour
    });
})(jQuery);
