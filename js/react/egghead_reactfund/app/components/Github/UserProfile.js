const React = require("react");

const UserProfiles = React.createClass({
    render: function() {
        return (
            <div>
                <p>UserProfiles! </p>
                <p>Username: {this.props.username}</p>
                <p>Bio: {this.props.bio.name} </p>
            </div>
        )
    }
});

module.exports = UserProfiles;
