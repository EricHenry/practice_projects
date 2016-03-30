import React from "react";
import ReactDOM from "react-dom";

let Mixin = (InnerComponent) => class extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
        this.state =  { val: 0 };
    }
    update() {
        this.setState({val: this.state.val + 1});
    }

    componentWillMount(){
        console.log("will mount");
    }

    render() {
        return (
            <InnerComponent update={this.update} {...this.state} {...this.props} />
        )
    }

    componentDidMount() {
        console.log("mounted");
    }
}

const Button = (props, ...a) => {
    console.log(props);
    console.log(a);
    return (
        <button onClick={props.update}> {props.txt} - {props.val} </button>
    );
}
const Label = (props) => <label onMouseMove={props.update}> {props.txt} - {props.val} </label>

let ButtonMixed = Mixin(Button);
let LabelMixed = Mixin(Label);

/**
 * Higher Order Components
 */
class App extends React.Component {


    render() {
        console.log('rendering!');
        console.log('rendering -> state change', this.state);
        return (
            <div>
                <ButtonMixed txt="Button" />
                <LabelMixed txt="Label" />
            </div>
        );
    }



}

App.defaultProps = { txt: "Button" };

export default App;
