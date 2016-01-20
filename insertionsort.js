var insert = function(array, rightIndex, value) {
    var i;
    
    for(i = rightIndex; i >=0 && array[i] > value; i -= 1) {
        
        array[i + 1] = array[i];
        
    }
    
    array[i + 1] = value;
    
};

var insertionSort = function(array) {
    var j;

    for(j = 1; j < array.length; j += 1) {

        insert(array, j-1, array[j]);
    
    }

    return array;

};

module.exports = insertionSort;