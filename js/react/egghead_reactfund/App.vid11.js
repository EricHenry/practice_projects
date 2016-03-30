import React from "react";
import ReactDOM from "react-dom";

/**
 * Updating lifecycle phases of react
 */
class App extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
        this.state =  { increasing: false };
    }
    update() {
        ReactDOM.render(<App val={this.props.val+1} />, document.getElementById("app"));
    }

    componentWillReceiveProps(nextProps) {
        this.setState({increasing: nextProps.val > this.props.val})
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 5 === 0;
    }

    render() {
        console.log('rendering!');
        console.log('rendering -> state change', this.state);
        return (
            <button onClick={this.update}>
                {this.props.val}
            </button>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps);
    }

}

App.defaultProps = { val: 0 };

export default App;
