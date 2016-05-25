import React from "react";
import {History} from "react-router";

class SearchGithub extends React.Component {
    getRef(ref) {
        this.usernameRef = ref;
    }

    handleSubmit() {
        const username = this.usernameRef.value;
        this.usernameRef.value = "";
        this.props.history.pushState(null, "/profile/" + username);
    }

    render() {
        return (
            <div className="col-sm-12">
                <form onSubmit={() => this.handleSubmit()}>
                    <div classname="form-group col-sm-7">
                        <input type="text" classname="form-control" ref={(ref) => this.getRef(ref)} />
                    </div>
                    <div classname="form-group col-sm-5">
                        <button type="submit" classname="btn btn-block btn-primary">
                            search github
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

SearchGithub.propTypes = {
    history: React.PropTypes.object.isRequired
};

export default SearchGithub;
