import React from "react";
import Repos from "./Github/Repos";
import UserProfiles from "./Github/UserProfile";
import Notes from "./Notes/Notes";
import getGithubInfo from "../utils/helpers";
import Rebase from "re-base";

// 1. need to tell re-base what your base url is
const base = Rebase.createClass("https://github-note-taker.firebaseio.com/");

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            bio: {},
            repos: []
        };
    }

    componentDidMount(){
        //lifecycle event *componentdidmount* is called right after your component mounts the view
        this.init(this.props.params.username);
    }

    componentWillReceiveProps(nextProps){
        // lifecycle method to handle a compononet receiving new props when already rendered
        base.removeBinding(this.ref);
        this.init(nextProps.params.username)
    }

    componentWillUnmount() {
        //lifecycle event whenever this component unmounts, do some stuff.
        base.removeBinding(this.ref);
    }

    handleAddNote(newNote) {
        //update firebase with newNote
        base.post(this.props.params.username, {
            data: this.state.notes.concat([newNote])
        })
    }

    init(username) {
        this.ref = base.bindToState(username, {
            context: this,
            asArray: true,
            state: 'notes'
        });

        console.log(this.ref);

        getGithubInfo(username)
            .then(function(data) {
                this.setState({
                    bio: data.bio,
                    repos: data.repos
                });
            }.bind(this))
    }

    render() {
        console.log(`Profile 'this': `, this);
        return (
            <div className="row">
                <div className="col-md-4">
                    {/* called username because we specified that in our Routes path in routes.js*/}
                    <UserProfiles username={this.props.params.username} bio={this.state.bio}/>
                </div>
                <div className="col-md-4">
                    <Repos username={this.props.params.username} repos={this.state.repos} />
                </div>
                <div className="col-md-4">
                    <Notes username={this.props.params.username} notes={this.state.notes}  addNote={(newNote) => this.handleAddNote(newNote)}/>
                </div>
            </div>
        )
    }
}

export default Profile;
