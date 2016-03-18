"use strict";

const TextCell = require("./TextCell.js");

(function() {

    function StretchCell(inner, width, height) {

        this.inner = inner;
        this.width = width;
        this.height = height;
    }

    StretchCell.prototype.minWidth = function () {
        return Math.max(this.inner.minWidth(), this.width);
    };
    StretchCell.prototype.minHeight = function () {
        return Math.max(this.inner.minHeight(), this.height);
    };
    StretchCell.prototype.draw = function (width, height) {
        return this.inner.draw(width, height);
    }

    // playing
    const tester = new TextCell(["abc", "def4", "ghijkk", "lmnop", "z"].join("\n"));
    console.log(tester);
    console.log(tester.minHeight());
    console.log(tester.minWidth());

    let sum = [0, 1, 2, 3, 4].reduce((previousValue, currentValue, currentIndex, array) => {
        console.log(previousValue, currentValue)
        return previousValue + currentValue;
    });

    console.log(sum);
    // end playing

    var sc = new StretchCell(new TextCell("abc"), 1, 2);
    console.log(sc.minWidth());
    // → 3
    console.log(sc.minHeight());
    // → 2
    console.log(sc.draw(3, 2));
    // → ["abc", "   "]
})();

