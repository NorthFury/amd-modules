define(['./pubsub'], function(pubsub) {
    return function(topic, message) {
        pubsub.publish(topic, message);
    };
});
