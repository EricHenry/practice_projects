import React from "react";
import ReactDOM from "react-dom";

/**
 * Must return one node from render.
 */
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hi World</h1>
                <b> {this.props.txt} </b>
            </div>
        )
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

/**
 * Default property values
 */
App.defaultProps = {
    txt: "this is the default text"
}

/**
 * How To build Stateless components that just render onto the screen
 */
// const App = () => (
//     <h1> Hello Dummies!</h1>
// );

// export default App;

ReactDOM.render(<App cat={5} txt="this is the props text" />, document.getElementById("app"));
