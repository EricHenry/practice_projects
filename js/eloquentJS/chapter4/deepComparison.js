function deepEqual(obj1, obj2) {

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

    
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
