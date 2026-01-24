"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Emp {
    name;
    id;
    salary;
    address;
    constructor(name, id, salary, address) {
        this.name = name;
        this.id = id;
        this.salary = salary;
        this.address = address;
    }
    displayInfo() {
        console.log("Name:", this.name);
        console.log("ID:", this.id);
        console.log("Salary:", this.salary);
        console.log("Address:", this.address);
    }
}
let emp1 = new Emp("Rahul", 101, 30000, "Delhi");
emp1.displayInfo();
//# sourceMappingURL=q1.js.map