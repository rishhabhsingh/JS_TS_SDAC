"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Company {
    static companyName = "ABC Pvt Ltd";
    employeeName;
    constructor(employeeName) {
        this.employeeName = employeeName;
    }
    display() {
        console.log("Employee Name:", this.employeeName);
        console.log("Company Name:", Company.companyName);
    }
}
let c1 = new Company("Amit");
c1.display();
//# sourceMappingURL=q2.js.map