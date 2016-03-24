var contacts = [
    {key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
    {key: 2, name: "Jim", email: "jim@example.com"},
    {key: 3, name: "Joe"},
];

var ContactItem = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        email: React.PropTypes.string.isRequired,
        description: React.PropTypes.string,
    },
    render: function() {
        return (
            React.createElement("li", {className: 'Contact'},
                React.createElement("h2", {className: 'Contact-name'}, this.props.name),
                React.createElement('a', {href: 'mailto:' + this.props.email}, this.props.email),
                React.createElement('p', {}, this.props.description)
            )
        )
    }
});

/******* NEW ******************/
var newContact = {name: "", email: "", description: ""};

var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            React.createElement("form", {},
                React.createElement("input", {
                    type: "text",
                    placeholder: "name",
                    value: this.props.contact.name
                }),
                React.createElement("input", {
                    type: "text",
                    placeholder: "email",
                    value: this.props.contact.email
                }),
                React.createElement("textarea", {
                    placeholder:"description",
                    value: this.props.contact.description
                }),
                React.createElement("button", {type:"submit"}, "Add Contact")
            )
        )
    }
});

var contactItemElements = contacts
                        .filter(function filterHandler(contact) {
                            return contact.email;
                        })
                        .map(function mapHandler(contact) {
                            return React.createElement(ContactItem, contact);
                        });

var rootElement =
        React.createElement("div", {},
            React.createElement("h1", {}, "Contacts"),
            React.createElement("ul", {}, contactItemElements),
            React.createElement(ContactForm, {conact: newContact})
        );

ReactDOM.render(rootElement, document.getElementById('react-app'));
