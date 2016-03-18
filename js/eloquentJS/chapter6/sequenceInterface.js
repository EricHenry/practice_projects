//// Your code here.
//const Sequence = {
//    elementList: [],
//    get elements() {
//        return this.elementList;
//    },
//    set elements(value) {
//        this.elementsList = value;
//    },
//    get end() {
//        this.elementList.length - 1;
//    },
//    get index() {
//
//    },
//    set index(value) {
//
//    },
//    iterate(array, index) {
//        return array[index];
//    }
//};
//
//function logFive(sequence) {
//    let length = Math.min(sequence.getEnd(), 5);
//    for (let i = 0; i < length; i += 1) {
//        console.log(sequence.iterate());
//    }
//}
//
//function ArraySeq(array) {
//    this.array = array;
//}
//
//ArraySeq.prototype = Object.create(Sequence);
//ArraySeq.prototype.iterate =

// I am going to use a system where a sequence object has two methods:
//
// * next(), which returns a boolean indicating whether there are more
//   elements in the sequence, and moves it forward to the next
//   element when there are.
//
// * current(), which returns the current element, and should only be
//   called after next() has returned true at least once.
"use strict";

function logFive(sequence) {
    for (let i = 0; i < 5; i += 1) {
        if (!sequence.next()) {
            break;
        }
        console.log(sequence.current());
    }
}

function ArraySeq(array) {
    this.pos = -1;
    this.array = array;
}

ArraySeq.prototype.next = function next() {
    if (this.pos >= this.array.length - 1) {
        return false;
    }
    this.pos += 1;
    return true;
};

ArraySeq.prototype.current = function current() {
    return this.array[this.pos];
};

function RangeSeq(from, to) {
    this.pos = from - 1;
    this.to = to;
}

RangeSeq.prototype.next = function next() {
    if (this.from >= this.to) {
        return false;
    }
    this.pos += 1;
    return true;
};

RangeSeq.prototype.current = function current() {
  return this.pos;
};

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
