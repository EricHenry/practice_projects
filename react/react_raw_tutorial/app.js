var contacts = [
  {
    key: 1,
    name: 'James Nelson',
    email: 'James@Nelson.com'
  },
  {
    key: 2,
    name: 'Bob'
  }
];

var listElements = contacts
      .filter(function __filter_handler__(contact){
        return contact.email
      })
      .map(function __map_handler__(contact){
          return React.createElement('li', {key: contact.key},
                    React.createElement('h2', {}, contact.name),
                    React.createElement('a', {href: 'mailto:' + contact.email}, contact.email)
          )
      });

var rootElement =
      React.createElement('div', {},
        React.createElement('h1', {}, "Contacts - Dummy"),


      //If your 'children' is a array, you'll need to give each one
      //a unique 'key' prop
      React.createElement('ul', {}, listElements)
    );

    ReactDOM.render(rootElement, document.getElementById('react-app'));

// var rootElement =
//   React.createElement('div', {},
//     React.createElement('h1', {}, "Contacts"),
//     React.createElement('ul', {},
//       React.createElement('li', {},
//         React.createElement('h2', {}, "James Nelson"),
//         React.createElement('a', {href: 'mailto:james@jamesknelson.com'}, 'james@jamesknelson.com')
//       ),
//       React.createElement('li', {},
//         React.createElement('h2', {}, "Joe Citizen"),
//         React.createElement('a', {href: 'mailto:joe@example.com'}, 'joe@example.com')
//       )
//     )
//   )
//
//   console.log(rootElement);
//
//   ReactDOM.render(rootElement, document.getElementById('react-app'));
