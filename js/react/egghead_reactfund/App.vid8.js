import React from "react";
import ReactDOM from "react-dom";

/**
 * TO access child components can use this.props.children
 */
class App extends React.Component {
    render() {
        return <Button> I <Heart /> React </Button>
    }
}

class Button extends React.Component {
    render() {
        return <button>{this.props.children}</button>
    }
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>

export default App;
