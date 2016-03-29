const React = require("react");
const Router = require("react-router");
const Repos = require("./Github/Repos");
const UserProfiles = require("./Github/UserProfile");
const Notes = require("./Notes/Notes");
const ReactFireMixin = require("reactfire");
const FireBase = require("firebase");
const helpers = require("../utils/helpers");

const Profile = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function() {
        return {
            notes: [],
            bio: {},
            repos: []
        };
    },

    componentDidMount: function(){
        //lifecycle event *componentdidmount* is called right after your component mounts the view
        this.ref = new FireBase("https://github-note-taker.firebaseio.com/");
        console.log(this.ref);
        this.init(this.props.params.username);

    },

    componentWillReceiveProps: function(nextProps){
        // lifecycle method to handle a compononet receiving new props when already rendered
        console.log(`the next props are `, nextProps);
        this.unbind('notes');
        this.init(nextProps.params.username)
    },

    componentWillUnmount: function(){
        //lifecycle event whenever this component unmounts, do some stuff.
        this.unbind('notes');
    },

    handleAddNote: function(newNote) {
        //update firebase with newNote
        this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);
    },

    init: function(username) {
        //child() -> firebase method that gets the child of this.ref which would be the "eric" if this was the ref https://github-note-taker.firebaseio.com/eric ->
        let childRef = this.ref.child(username);

        //binding the childRef to notes
        this.bindAsArray(childRef, 'notes');

        helpers.getGithubInfo(username)
            .then(function(data) {
                console.log(`GITHUB: `, data);
                this.setState({
                    bio: data.bio,
                    repos: data.repos
                });
            }.bind(this))
    },

    render: function() {
        console.log(this);
        console.log(this.props);
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
                    <Notes username={this.props.params.username} notes={this.state.notes}  addNote={this.handleAddNote}/>
                </div>
            </div>
        )
    }
});

module.exports = Profile;
