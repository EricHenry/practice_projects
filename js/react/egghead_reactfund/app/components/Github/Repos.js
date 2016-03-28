const React = require("react");

const Repos = React.createClass({
    render: function() {
        return (
            <div>
                <p>Repos</p>
                <p>Repos: {this.props.repos}</p>
            </div>
        )
    }
});

module.exports = Repos;
