import React from "react";
import ReactDOM from "react-dom";

/**
 * Must return one node from render.
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
    }

    /**
     * Custom Method that takes an event object
     */
    update(e) {
        // setState() is part of ReactComponent API
        this.setState({txt: e.target.value})
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <b> {this.state.txt} </b>
                <input type="text" onChange={this.update.bind(this)} />
            </div>
        )
    }
}

// App.propTypes = {
//     txt: React.PropTypes.string,
//     cat: React.PropTypes.number.isRequired
// }

/**
 * Default property values
 */
// App.defaultProps = {
//     txt: "this is the default text"
// }

/**
 * How To build Stateless components that just render onto the screen
 */
// const App = () => (
//     <h1> Hello Dummies!</h1>
// );

export default App;

// ReactDOM.render(<App cat={5} txt="this is the props text" />, document.getElementById("app"));
