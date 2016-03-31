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

const Counter = ({ value, onIncrement, onDecrement }) => {
    React.createElement("div", null, 
        React.createElement("h1", null, value),
        React.createElement("button", { onClick: onIncrement}, "+"),
        React.createElement("button", { onClick: onDecrement}, "-")
    ); 
};

const { createStore } = Redux;
const store =  createStore(counter); // create a store with 'counter' as the reducer manages state updates

const render = () => {
    let CounterElement = React.createElement(Counter, { value: store.getState() }, null);
    ReactDOM.render(CounterElement, document.getElementById("root"));
};

store.subscribe(render); // doesnt fire the initial state, only fires when dispatch is called
render();

