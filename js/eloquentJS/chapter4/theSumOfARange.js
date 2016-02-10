/*
 * create an array with a range of numbers from the start point to the and including the end
 *
 * Bonus: added "step" parameter to indicate how the range should inrement
*/
function range(start, end, step){
    if (step == null) { step = 1 }
    var array = [];

    if (step > 0){
        for (var i = start; i <= end; i += step) {
            array.push(i);
        }
    } else {
        for (var i = start; i >= end; i += step) {
            array.push(i);
        }
    }

    return array;
}

/*
 * Sum functions in an array
*/
function sum(arrayOfNumbers){
    var summedNumbers = 0;

    arrayOfNumbers.forEach(function(element){
        summedNumbers += element;
    });

    return summedNumbers;
}

console.log(range(5, 11));      // [ 5, 6, 7, 8, 9, 10, 11 ]
console.log(sum([1,2,3,4,5]));  // 15
console.log(sum(range(1, 10))); // 55

// Bonus
console.log(range(1, 10, 2));   // [ 1, 3, 5, 7, 9 ]
console.log(range(10, 1, -1));  // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
