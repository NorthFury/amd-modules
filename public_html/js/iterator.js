function iterator(arr) {
    var position = 0;

    return {
        hasNext: function() {
            return position < arr.length;
        },
        getNext: function() {
            return arr[position++];
        }
    };
}

(function() {
    var i = iterator([5, 7, 9]);

    while (i.hasNext()) {
        console.log(i.getNext());
    }
})();
