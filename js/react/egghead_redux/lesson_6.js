"use strict";
// import expect from "expect";

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

const { createStore } = Redux;

// create a store with 'counter' as the reducer
//  manages state updates
const store =  createStore(counter);

console.log(store.getState());

store.dispatch({ type: "INCREMENT" });
console.log(store.getState());

// store.subscribe(() => {
//    document.body.innerText = store.getState(); 
// });

// exttract out to render method so you can render the initial state on line 39
const render = () => {
    document.body.innerText = store.getState(); 
};

store.subscribe(render); // doesnt fire the initial state, only fires when dispatch is called
render();

// anytime the body is clicked, dispatch an action to the store.
//  dispatching gives the store an action object.
document.addEventListener("click", () => {
   store.dispatch({ type: "INCREMENT" }); 
});
