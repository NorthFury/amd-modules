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

requirejs(['pubsub/pub', 'pubsub/sub'], function(pub, sub) {
    var topic = 'log-message';
    sub(topic, function(message) {
        console.log(message);
    });

    pub(topic, 'pubsub message');
});

requirejs(['iterator'], function(iterator) {
    var i = iterator([5, 7, 9]);
    while (i.hasNext()) {
        console.log(i.getNext());
    }
});

requirejs(['zepto', 'widget/tabs'], function($, tabview) {
    var tabsContainer = $('<div style="width: 500px;"/>');
    var myTabs = tabview(tabsContainer);

    myTabs.on('tab-create', function(tab, content) {
        var closeButton = $('<span class="ui-icon ui-icon-close">Remove Tab</span>');
        closeButton.appendTo(tab);
        closeButton.on("click", function() {
            tab.remove();
            content.remove();
        });
    });

    for (var i = 0; i < 4; i++) {
        myTabs.addTab({
            title: 'Tab ' + (i + 1),
            content: 'Content for tab ' + (i + 1)
        });
    }

    $(document.body).append(tabsContainer);
});
