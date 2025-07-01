"use strict";
console.log("this is classes");
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log("Dapratment", this.name);
    }
}
const accounting = new Department("Accounting");
accounting.describe();
const accountingCopy = {
    name: "Dummy",
    describe: accounting.describe
};
accountingCopy.describe();
//public private and access modifiers
class Department2 {
    constructor(n) {
        this.name = n;
        this.employees = [];
    }
    describe() {
        console.log("Dapratment", this.name);
        for (let i = 0; i < this.employees.length; i++) {
            console.log("employeee", this.employees[i]);
        }
    }
    addEmployees(emp) {
        this.employees.push(emp);
    }
}
const data = new Department2("Teacher");
data.describe();
data.addEmployees("Gaarvit");
data.describe();
data.addEmployees("Radhika");
data.describe();
