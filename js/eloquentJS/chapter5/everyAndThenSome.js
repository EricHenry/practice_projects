// function every(array, test) {
//     var result = true;
//
//     array.forEach(function(element) {
//         if (!test(element)) {
//             result = false;
//             return;
//         }
//     });
//
//     return result;
//
// }
//
// function some(array, test) {
//     var result = false;
//     array.forEach(function(element) {
//         if (test(element)) {
//             result = true;
//             return;
//         }
//     });
//
//     return result;
// }

// Refactored below
function every(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (!predicate(array[i])) {
            return false;
        }
    }

    return true;
}

function some(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            return true;
        }
    }

    return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
