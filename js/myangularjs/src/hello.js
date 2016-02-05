var _ = require("lodash");

// function sayHello() {
//     return "oh, Hello world!";
// }

function sayHello(to) {
    return _.template("oh, Hello <%= name %>!")({name: to});
}

module.exports = sayHello;

//export defaults sayHello;

//sayHello();