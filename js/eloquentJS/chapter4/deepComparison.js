function deepEqual(x, y) {

    // var bothAreNotNull = (obj1 !== null && obj2 !== null);
    // var bothAreObjects = (typeof obj1 === "object" && typeof obj2 === "object");
    //
    // if(bothAreNotNull && bothAreObjects){
    //     for (key in obj1){
    //          deepEqual(obj1[key], obj2[key])
    //     }
    // } else {
    //     if(obj1 !== obj2)
    //         return false;
    // }
    //
    // return true;
    // debugger;

    if (x === y) {
        return true;
    }

    if (x == null || typeof x != "object" || y == null || typeof y != "object" ) {
        return false;
    }

    var propsInX = 0,
        propsInY = 0;

    for (var prop in x) {
        propsInX += 1;
    }

    for (var prop in y){
        propsInY += 1;
        if (!(prop in x) || !deepEqual(x[prop], y[prop])) {
            return false;
        }
    }

    return propsInX == propsInY;
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
