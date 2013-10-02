define(['./pubsub'], function(pubsub) {
    return function(topic, callback) {
        pubsub.subscribe(topic, callback);
    };
});
