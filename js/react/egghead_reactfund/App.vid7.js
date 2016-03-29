import React from "react";
import ReactDOM from "react-dom";

/**
 * When one compoenent renders another component its called the owner / ownee relationship
 *  The parent component is called a composite component
 *
 * Refs are a way to reference an instance of a componenet from within our react application
 *  Don't work with statless function components
 */
class App extends React.Component {
    //constructor gives us our context for this within our component
    constructor(){
        super();
        console.log(`this value after super call`, this);
        this.state = {
            red: 0,
            green: 0,
            blue: 0
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
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red).value,
            green: ReactDOM.findDOMNode(this.refs.green).value,
            blue: ReactDOM.findDOMNode(this.refs.blue).value
        })
    }

    /**
     * Must return one node from render().
     */
    render() {
        return (
            <div>
                <Slider ref="red" update={this.update} />
                {this.state.red}
                <br />
                <Slider ref="green" update={this.update} />
                {this.state.green}
                <br />
                <Slider ref="blue" update={this.update} />
                {this.state.blue}
                <br />
            </div>
        )
    }
}

class Slider extends React.Component {
    render() {
        return (
            <div>
                <input type="range" min="0" max="255" onChange={this.props.update} />
            </div>
        )
    }
}

export default App;
