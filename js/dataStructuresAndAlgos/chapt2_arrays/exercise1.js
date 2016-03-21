/*
Create a grades object that stores a set of student grades in an object. 
1. Provide a function for adding a grade and 
2. a function for displaying the student's grade average
 */
"use strict";

function Grades() {
    const dataStore = [];
    this.add = add;
    this.average = average;

    function add(grade) {
        dataStore.push(grade);
    }

    function average() {
        let sum = dataStore.reduce((gradeSum, nextGrade) => {
            return gradeSum + nextGrade;
        });
        
        let average = sum / dataStore.length;
        
        return average;
    }
}

let britsGrades = new Grades();
let data = [78, 80, 66, 90, 100, 66, 82, 55];

data.forEach((grade) => {
    britsGrades.add(grade);
});

console.log(britsGrades);
console.log(britsGrades.average());
