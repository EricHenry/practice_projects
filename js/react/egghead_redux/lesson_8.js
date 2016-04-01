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
    return ( 
        React.createElement("div", null, 
            React.createElement("h1", null, value),
            React.createElement("button", { onClick: onIncrement}, "+"),
            React.createElement("button", { onClick: onDecrement}, "-")
        )
    ); 
};

const { createStore } = Redux;
const store =  createStore(counter); // create a store with 'counter' as the reducer manages state updates

const render = () => {
    // let CounterElement = React.createElement(Counter, { value: store.getState() }, null);
    // console.log(CounterElement);
    ReactDOM.render(
        React.createElement(Counter, 
            { value: store.getState(),
                onIncrement: () => (
                    store.dispatch({
                        type: "INCREMENT"
                    })
                ),
                onDecrement: () => (
                    store.dispatch({
                        type: "DECREMENT"
                    })
                ) }, null), document.getElementById("root"));
};

store.subscribe(render); // doesnt fire the initial state, only fires when dispatch is called
render();

