
function reverseArray(array) {
    var output = [];

    for (var i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }

    return output;

}

function reverseArrayInPlace(array) {

    for (var i = 0; i <= array.length / 2; i++) {
        var old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }

    return array;

}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlace(["A", "B", "C"]));
