function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function plus(vector) {
    var sumX = this.x + vector.x;
    var sumY = this.y + vector.y;
    return new Vector(sumX, sumY);
};
Vector.prototype.minus = function minus(vector) {
    var difX = this.x - vector.x;
    var difY = this.y - vector.y;
    return new Vector(difX, difY);
};

Object.defineProperty(Vector.prototype, "length",
    {
        get: function get(){
            var sqrdX = Math.pow(this.x, 2);
            var sqrdY = Math.pow(this.y, 2);
            return Math.sqrt(sqrdX + sqrdY);
        }
    }
);

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5