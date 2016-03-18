// legend object is tells us what each character in the map means
"use strict";

const BouncingCritter = require("./BouncingCritter.js");
const Vector = require("./Vector.js");
const Grid = require("./Grid.js");

var plan = ["############################",
    "#      #    #      o      ##",
    "#                          #",
    "#          #####           #",
    "##         #   #    ##     #",
    "###           ##     #     #",
    "#           ###      #     #",
    "#   ####                   #",
    "#   ##       o             #",
    "# o  #         o       ### #",
    "#    #                     #",
    "############################"];

function World(map, legend) {
    this.grid = new Grid(map[0].length, map.length);
    this.legend = legend;

    map.forEach((line, y) => {
        for (let x = 0; x < line.length; x += 1) {
            this.grid.set(new Vector(x, y), elementFromChar(legend, line[x]));
        }
    });
}

function elementFromChar(legend, ch) {
    if (ch === null) {
        return null;
    }
    var element = new legend[ch]();
    element.originChar = ch;
    return element;
}

function charFromElement(element) {
    if (element === null) {
        return "";
    } else {
        element.originChar;
    }
}

World.prototype.toString = function() {
    var output = "";
    for (let y = 0; y < this.grid.height; y += 1) {
        for (let x = 0; x < this.grid.width; x += 1) {
            var element = this.grid.get(new Vector(x, y));
            output += charFromElement(element);
        }
        output += "\n";
    }
    return output;
};

function Wall() {}

module.exports = World;

var world = new World(plan, {"#": Wall,
    "o": BouncingCritter});
console.log(world.toString());
// → ############################
//   #      #    #      o      ##
//   #                          #
//   #          #####           #
//   ##         #   #    ##     #
//   ###           ##     #     #
//   #           ###      #     #
//   #   ####                   #
//   #   ##       o             #
//   # o  #         o       ### #
//   #    #                     #
//   ############################”