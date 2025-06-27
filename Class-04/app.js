"use strict";
// import { userName, arr } from "./utils/sum.js";
// import Sum from "./utils/sum.js";
class Student {
    userName;
    rollNumber;
    isMarried;
    constructor(userName, rollNumber, isMarried) {
        this.userName = userName;
        this.rollNumber = rollNumber;
        this.isMarried = isMarried;
    }
}
const student = new Student("Abdul Hannan", 188528, true);
console.log(student);
const student2 = new Student("Haider Ali Shah", 188529, true);
console.log(student2);
