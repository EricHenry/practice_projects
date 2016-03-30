import React from "react";
import ReactDOM from "react-dom";

/**
 *
 */
class App extends React.Component {
    //constructor gives us our context for this within our component
    constructor(){
        super();
        console.log(`this value after super call`, this);
        this.state = {
            red: 0
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
            red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
        })
    }

    /**
     * Must return one node from render().
     */
    render() {
        return (
            <div>
                <NumInput
                    ref="red"
                    min={0}
                    max={255}
                    step={1}
                    val={+this.state.red}
                    label="Red"
                    update={this.update} />
                {this.state.red}
            </div>
        )
    }
}

class NumInput extends React.Component {
    render() {
        let label = this.props.label !== `` ?
            <label>{this.props.label} - {this.props.val}</label> : ``;
        return (
            <div>
                <input ref="inp"
                    type={this.props.type}
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    defaultValue={this.props.val}
                    onChange={this.props.update} />
                {label}
            </div>
        )
    }
}

const { number, string, func, oneOf } = React.PropTypes;

NumInput.propTypes ={
    min: number,
    max: number,
    step: number,
    val: number,
    label: string,
    update: func.isRequired,
    type: oneOf(["number", "range"])
};

NumInput.defaultProps = {
    min: 0,
    max: 0,
    step: 1,
    val: 0,
    label: ``,
    type: `range`
}

export default App;
