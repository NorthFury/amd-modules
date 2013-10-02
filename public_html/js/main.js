requirejs.config({
    baseUrl: "js/modules",
    urlArgs: "timestamp=" + (new Date()).getTime(),
    shim: {
        'zepto': {
            exports: 'Zepto'
        },
        'underscore': {
            exports: '_'
        }
    },
    paths: {
        'zepto': '../libs/zepto',
        'underscore': '../libs/underscore',
        'text': '../libs/text'
    }
});

requirejs(['zepto'], function($) {
    $(document.body).append("<div>Hello World!</div>");
});

requirejs(['zepto', 'underscore', 'constants', 'text!color.html!strip'], function($, _, constants, color) {
    var template = _.template(color, {
        color: constants.color
    });
    $(document.body).append(template);
});

requirejs(['logger'], function(logger) {
    logger.log("Here comes the log.");
});
