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

// const { createStore } = Redux;
// implement createStore from scratch;
const createStore = (reducer) => { // takes a reducer funcntion provided by the application
    // holds the current state
    let state;
    let listeners = []; // listeners waits to see if the state has changed and is called when it has, by the dispatch method
    
    //returns the current state variable
    const getState = () => state;
    
    const dispatch = (action) => {
        state = reducer(state, action);
        // once state is changed call all of the listeners
        listeners.forEach(listener => listener());
    };
    
    const subscribe = (listener) => {
        listeners.push(listener);
        
        // to unsubscribe return a function that removes this listener from the listeners array
        return () => {
          listeners = listeners.filter(l => l !== listener);  
        };
    };
    
    // by the time the store is returned we want to have the state initialized
    //  do this by calling a dummy dispatch function
    dispatch({});
    
    return { getState, dispatch, subscribe };
}

const store =  createStore(counter);

console.log(store.getState());

store.dispatch({ type: "INCREMENT" });
console.log(store.getState());

const render = () => {
    document.body.innerText = store.getState(); 
};

store.subscribe(render); // doesnt fire the initial state, only fires when dispatch is called.
render();

document.addEventListener("click", () => {
   store.dispatch({ type: "INCREMENT" }); 
});
