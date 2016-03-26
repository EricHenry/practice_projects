/*
* Components
*/
var ContactItem = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        email: React.PropTypes.string.isRequired,
        description: React.PropTypes.string,
    },

    render: function() {
        return (
            React.createElement('li', {className: 'ContactItem'},
                React.createElement('h2', {className: 'ContactItem-name'}, this.props.name),
                React.createElement('a', {className: 'ContactItem-email', href: 'mailto:'+this.props.email}, this.props.email),
                React.createElement('div', {className: 'ContactItem-description'}, this.props.description)
        )
    );
},
});

var ContactForm = React.createClass({
    propTypes: {
        value: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onSubmit: React.PropTypes.func.isRequired
    },
    onNameInput: function(e) {
        this.props.onChange(Object.assign({}, this.props.value, { name: e.target.value }));
    },
    onEmailInput: function(e) {
        this.props.onChange(Object.assign({}, this.props.value, { email: e.target.value }));
    },
    onDescriptionInput: function(e) {
        this.props.onChange(Object.assign({}, this.props.value, { description: e.target.value }));
    },
    onSubmit: function(e) {
        e.preventDefault();
        this.props.onSubmit();
    },
    render: function() {
        return (
            React.createElement('form', {className: 'ContactForm', onSubmit: this.onSubmit},
                React.createElement('input', {
                    type: 'text',
                    required: true,
                    placeholder: 'Name (required)',
                    value: this.props.value.name,
                    onChange: this.onNameInput
                }),
                React.createElement('input', {
                    type: 'email',
                    required: true,
                    placeholder: 'Email (required)',
                    value: this.props.value.email,
                    onChange: this.onEmailInput
                }),
                React.createElement('textarea', {
                    placeholder: 'Description',
                    value: this.props.value.description,
                    onChange: this.onDescriptionInput
                }),
                React.createElement('button', {type: 'submit'}, "Add Contact")
            )
        );
    },
});

var ContactView = React.createClass({
    propTypes: {
        contacts: React.PropTypes.array.isRequired,
        newContact: React.PropTypes.object.isRequired,
        onNewContactChange: React.PropTypes.func.isRequired,
        onAddNewContact: React.PropTypes.func.isRequired
    },

    render: function() {
        var contactItemElements = this.props.contacts
        .filter(function(contact) { return contact.email; })
        .map(function(contact) { return React.createElement(ContactItem, contact); });

        return (
            React.createElement('div', {className: 'ContactView'},
                React.createElement('h1', {className: 'ContactView-title'}, "Contacts"),
                React.createElement('ul', {className: 'ContactView-list'}, contactItemElements),
                React.createElement(ContactForm, {
                    contactsList: this.props.contacts,
                    value: this.props.newContact,
                    onChange: this.props.onNewContactChange,
                    onSubmit: this.props.onAddNewContact
                })
            )
        );
    },
});

/*
 * Constants
 */


var CONTACT_TEMPLATE = {name: "", email: "", description: "", errors: null};

/*
* Actions
*/
function updateNewContact(contact) {
    // debugger;
    setState({ newContact: contact });
}

function addNewContact() {
    debugger;
    var contact = Object.assign({}, state.newContact, {key: state.contacts.length + 1, errors: {}});

    if (!/.+@.+\..+/.test(contact.email)) {
        contact.errors.email = ["Please enter your new contact's email"];
    }

    // form should restrict to non-empty data, but just incase double check
    if (contact.name && contact.email) {
        var newState = Object.keys(contact.errors).length === 0
            ? {
                newContact: Object.assign({}, CONTACT_TEMPLATE),
                contacts: state.contacts.slice(0).concat(contact), // need to slice to produce a new array
            }
            : { newContact: contact }

        setState(newState);
    }
}


/*
* Model
*/
// The app's complete current state
var state = {};

// Make the given changes to the state and perform any required housekeeping
function setState(changes) {
    Object.assign(state, changes);

    ReactDOM.render(
        React.createElement(ContactView, Object.assign({}, state, {
            onNewContactChange: updateNewContact,
            onAddNewContact: addNewContact
        })),
        document.getElementById('react-app')
    );
}

// Set initial data
setState({
    contacts: [
        {key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
        {key: 2, name: "Jim", email: "jim@example.com"},
    ],
    newContact: Object.assign({}, CONTACT_TEMPLATE),
});
