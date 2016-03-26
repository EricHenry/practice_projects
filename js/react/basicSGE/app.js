"use strict";

/**
 * Components
 */
const InfoView = React.createClass({
    propTypes: {
        info: React.PropTypes.object.isRequired
    },

    render: () => {
        React.createElement("input", {
            value: this.props.info.title}
        );
    }
});

const InfoEdit = React.createClass({
    render: () => {
        return (
            React.createElement() {

            }
        );
    }
});

const SideNav = React.createClass({
    render: () => (
        React.createElement("div", {className: "Sidenav"},
            React.createElement("h1", {className: "Sidenav-title"}, "Booknds!")
        )
    )
});

const Header = React.createClass({
    render: () => (
        React.createElement("div", {className:"Header"},
            React.createElement("h2", {className: "Header-title"}, "Swagger Graphical Editor")
        )
    )
});

const Main = React.createClass({
    render: () => (
        React.createElement("h1", {className: "Main"}, "INSERT APP HERE!")
    )
});

const rootApp = React.createClass({
    render: () => (
        React.createElement("div", {className: "layout-row"},
            React.createElement(SideNav, {}),
            React.createElement("div", {className: "layout-column"},
                React.createElement(Header, {}),
                React.createElement(Main, {})
            )
        )
    )
});

/**
 *Actions
 */

/**
 *State
 */

ReactDOM.render(React.createElement(rootApp, {}), document.getElementById("app"));
