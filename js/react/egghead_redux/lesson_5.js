"use strict";
import expect from "expect";

/**
 * Reducer for a counter example
 */
// function counter(state, action) {
//     if ( typeof state === "undefined" ) {
//         return 0;
//     }
    
//     if (action.type === "INCREMENT") {
//         return state + 1;
//     } else if (action.type === "DECREMENT") {
//         return state - 1;
//     } else {
//         return state;
//     }
// }

/**
 * ES6 version
 */
const counter = (state = 0, action) => {    
    switch(action.type){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state
    }
}

expect(
    counter(0, { type: "INCREMENT" })
).toEqual(1);

expect(
    counter(1, { type: "INCREMENT" })
).toEqual(2);

expect(
    counter(2, { type: "DECREMENT" })
).toEqual(1);

expect(
    counter(1, { type: "DECREMENT" })
).toEqual(0);

expect(
    counter(0, { type: "SOMETHING ELSE" })
).toEqual(0);

expect(
    counter(undefined, {})
).toEqual(0);


console.log("Tests passed.");