define(['zepto', './observable'], function($, observable) {
    return function(container) {
        var self = observable();
        var tabsContainer, contentContainer;

        var init = function() {
            var separator;

            tabsContainer = $('<div/>').addClass('ui-helper-clearfix tabview-pane');
            separator = $('<div/>').addClass('ui-state-active');
            contentContainer = $('<div/>').addClass('ui-widget-content');

            container.addClass('tabview');
            container.append(tabsContainer);
            container.append(separator);
            container.append(contentContainer);
        };

        self.addTab = function(tabData) {
            var tab = $('<div/>').addClass('ui-state-default ui-corner-top');
            var content = $('<div/>').hide();

            tab.html(tabData.title);
            content.html(tabData.content);

            tab.on({
                'mouseenter': function() {
                    tab.addClass('ui-state-hover');
                },
                'mouseleave': function() {
                    tab.removeClass('ui-state-hover');
                },
                'click': function() {
                    tabsContainer.children('div').removeClass('ui-state-active');
                    tab.addClass('ui-state-active');

                    contentContainer.children('div').hide();
                    content.show();
                }
            });

            tabsContainer.append(tab);
            contentContainer.append(content);

            self.trigger('tab-create', tab, content);
        };

        init();
        return self;
    };
});
