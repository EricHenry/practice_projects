var ancestry = JSON.parse(require("./data/ancestry.js"));

function average(array) {
    function plus(x, y) {
        return x + y;
    }

    return array.reduce(plus) / array.length;
}

function groupBy(array, groupOf) {
    var groups = {};
    array.forEach(function(element) {
        var groupName = groupOf(element);

        if (groupName in groups) {
            groups[groupName].push(element);
        } else {
            groups[groupName] = [element];
        }

    });

    return groups;
}

var peopleByCentury = groupBy(ancestry, function(person) {
    return Math.ceil(person.died / 100);
});
console.log(peopleByCentury);

for(var century in peopleByCentury) {
    var ages = peopleByCentury[century].map(function(person) {
        return person.died - person.born;
    });
    console.log(century, ": ", average(ages));
}
