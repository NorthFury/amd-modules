define(['underscore'], function(_) {
    return function() {
        var self = {};
        var callbacksMap = {};

        self.subscribe = function(event, callback) {
            if (_.isUndefined(callbacksMap[event])) {
                callbacksMap[event] = [];
            }

            callbacksMap[event].push(callback);
        };

        self.publish = function(event) {
            if (_.isUndefined(callbacksMap[event])) {
                return;
            }

            var callbacks = callbacksMap[event];
            for (var i = 0; i < callbacks.length; i++) {
                callbacks[i].apply(self, _.tail(arguments));
            }
        };

        return self;
    };
});
