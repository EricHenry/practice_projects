var ancestry = require("./ancestry.js");

function average(array) {
    function plus(x, y) {
        return x + y;
    }

    return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
    byName[person.name] = person;
});

// computer the average age difference
function dataHasMother(person) {
    var mothersName = person.mother;
    return (typeof byName[mothersName] !== "undefined");
}
function ageDifference(child) {
    return child.born - byName[child.mother].born;
}

console.log(average(ancestry.filter(dataHasMother).map(ageDifference)));
