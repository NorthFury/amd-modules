define(['underscore'], function(_) {
    var callbacksMap = {};

    return {
        publish: function(topic) {
            var callbacks = callbacksMap[topic] || [];
            for (var i = 0; i < callbacks.length; i++) {
                callbacks[i].apply(null, _.tail(arguments));
            }
        },
        subscribe: function(topic, callback) {
            if (_.isUndefined(callbacksMap[topic])) {
                callbacksMap[topic] = [];
            }
            callbacksMap[topic].push(callback);
        }
    };
});
