import React from "react";
import ReactDOM from "react-dom";

/**
 *
 */
class App extends React.Component {
    //constructor gives us our context for this within our component
    constructor(){
        super();
        this.state = {
            input: '/* add your jsx here */',
            output: '',
            err: ''
        };
        this.update = this.update.bind(this);
     }

    update(e) {
        let code = e.target.value;
        try {
            this.setState({
                output: babel.transform(code, {
                    stage: 0,
                    loose: 'all'
                }).code,
                err: ''
            })
        } catch (err) {
            this.setState({err: err.message});
        }
    }

    /**
     * Must return one node from render().
     */
    render() {
        return (
            <div>
                <header>{this.state.err}</header>
                <div className="container">
                    <textarea onChange={this.update}
                        defaultValue={this.state.input}>
                    </textarea>
                    <pre>
                        {this.state.output}
                    </pre>
                </div>
            </div>
        )
    }
}

export default App;
