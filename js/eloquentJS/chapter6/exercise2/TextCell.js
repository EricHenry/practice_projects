"use strict";

function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++)
        result += string;
    return result;
}

function TextCell(text) {
    this.text = text.split("\n");
}

TextCell.prototype.minWidth = function () {
    console.log(this.text);
    return this.text.reduce(function (width, line) {
        console.log(`\t ${width}, ${line}`);
        return Math.max(width, line.length); // returns the largest number given
    }, 0);
};

TextCell.prototype.minHeight = function () {
    return this.text.length;
};

TextCell.prototype.draw = function (width, height) {
    let result = [];
    for (let i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

module.exports = TextCell;