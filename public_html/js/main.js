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