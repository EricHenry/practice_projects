import React from "react";
import ReactDOM from "react-dom";

/**
 * When one compoenent renders another component its called the owner / ownee relationship
 *  The parent component is called a composite component
 */
class App extends React.Component {
    //constructor gives us our context for this within our component
    constructor(){
        super();
        console.log(`this value after super call`, this);
        this.state = {
            txt: "this is the state text"
        };
        console.log(`this value after state`, this);

        // shortcut to force this.update to always have this "this" in its execution context
        this.update = this.update.bind(this);
    }

    /**
     * Custom Method that takes an event object
     */
    update(e) {
        // setState() is part of ReactComponent API
        this.setState({txt: e.target.value})
    }

    /**
     * Must return one node from render().
     */
    render() {
        return (
            <div>
                <Widget txt={this.state.txt} update={this.update} />
            </div>
        )
    }
}

/**
 * Stateless Component
 * This will update the state.txt value of the parent component
 */
const Widget = (props) => {
    return (
        <div>
            <input type="text" onChange={props.update} />
            <h1>{props.txt} </h1>
        </div>
    )
}

export default App;
