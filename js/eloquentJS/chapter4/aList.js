// “builds up a list data structure”
function arrayToList(array) {

    var list = null;

    for (var i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list
        }
    }
    return list;
}

//“produces an array from a list”
function listToArray(list) {
    // console.log("list to array, ", list);
    // var array = [];
    //
    // var element = undefined;
    // for (var i = 0; element !== null; i++) {
    //     element = nth(list, i);
    //     console.log("\t pushing: ", element);
    //     array.push(element);
    // }

    var array = [];

    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }

    return array;
}

// “creates a new list that adds the element to the front of the input list”
function prepend(element, list) {
    // var newList = {
    //     value: element,
    //     rest: list
    // };
    //
    // return newList;

    return {
        value: element,
        rest: list
    };
}

// “returns the element at the given position in the list”
// implement recursively
function nth(list, number) {
    // console.log("nth");
    // console.log(list, ", " , number);
    // if(list === null) {
    //     return null;
    // } else
    //
    // if (number === 0) {
    //     return list.value;
    //
    // } else if (number > 0) {
    //     return nth(list.rest, number - 1);
    //
    // } else {
    //     return;
    // }

    if (!list) {
        return undefined;
    } else if (number === 0) {
        return list.value;
    } else {
        return nth(list.rest, number - 1);
    }

}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
