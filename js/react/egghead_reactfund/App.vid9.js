import React from "react";
import ReactDOM from "react-dom";

/**
 * Mounting lifecycle phases of react
 */
class App extends React.Component {
    constructor() {
        super();
        this.state =  { val: 0 };
        this.update = this.update.bind(this);
    }
    update() {
        this.setState({val: this.state.val + 1})
    }
    /**
     * Component is set up and guaranteed to mount, but has not yet;
     * (called once)
     */
    componentWillMount() {
        console.log('mounting!');
    }
    render() {
        console.log('rendering!');
        return <button onClick={this.update}>{this.state.val}</button>
    }
    /**
     * Component has just mounted and rendered (called once)
     */
    componentDidMount() {
        console.log("mounted!");
    }

    /**
     * About to remove component from DOM (Called once)
     */
    componentWillUnmount() {
        console.log("bye");
    }
}

class Wrapper extends React.Component {
    mount() {
        ReactDOM.render(<App />, document.getElementById("a"));
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'));
    }

    render() {
        return (
            <div>
                <button onClick={() => this.mount()}> Mount </button>
                <button onClick={() => this.unmount()}> Unmount </button>
                <div id="a"></div>
            </div>
        )
    }
}

export default Wrapper;
