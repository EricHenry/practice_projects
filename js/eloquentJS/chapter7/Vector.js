/**
 * Created by kilsuf on 3/17/16.
 */

"use strict";
function Vector(x, y){
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(other) {
    return new Vector(this.x + other.x, this.y + other.y);
};

module.exports = Vector;
