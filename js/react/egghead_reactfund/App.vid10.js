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
        this.setState({m:2});
        console.log('mounting -> state change', this.state);
    }
    render() {
        console.log('rendering!');
        console.log('rendering -> state change', this.state);
        return <button onClick={this.update}>{this.state.val * this.state.m}</button>
    }
    /**
     * Component has just mounted and rendered (called once)
     */
    componentDidMount() {
        console.log("mounted!");
        console.log(ReactDOM.findDOMNode(this));
        this.inc = setInterval(this.update,500);
    }

    /**
     * About to remove component from DOM (Called once)
     */
    componentWillUnmount() {
        console.log("bye");
        clearInterval(this.inc);
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
