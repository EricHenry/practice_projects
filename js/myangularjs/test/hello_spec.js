var sayHello = require("../src/hello");

// // group test cases in 'describe' blocks 
// describe("Hello", function() {

//     // test cases are in 'it' blocks
//     it("says hello", function() {
//         // can run arbitrary code and make assertions
//         // about results using 'expect'
//         expect(sayHello()).toBe("oh, Hello world!");
//     });
// });

// group test cases in 'describe' blocks 
describe("Hello", function() {

    // test cases are in 'it' blocks
    it("says hello", function() {
        // can run arbitrary code and make assertions
        // about results using 'expect'
        expect(sayHello("Jane")).toBe("oh, Hello Jane!");
    });
});