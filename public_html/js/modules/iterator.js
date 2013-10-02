define(function() {
    return function(arr) {
        var position = 0;

        return {
            hasNext: function() {
                return position < arr.length;
            },
            getNext: function() {
                return arr[position++];
            }
        };
    };
});
