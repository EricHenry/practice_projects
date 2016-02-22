var Flattening = (function flattening(){
    
    var publicApi = {

    };  

    function flatten() {

    }

})();

var arrays = [[1, 2, 3], [4, 5], [6]];

var flattened = arrays.reduce(function(previousArray, currentArray) {
    return currentArray = previousArray.concat(currentArray);
});

console.log(flattened);
// → [1, 2, 3, 4, 5, 6]