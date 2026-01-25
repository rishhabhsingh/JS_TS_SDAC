"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Institute {
    name;
    constructor(name) {
        this.name = name;
    }
}
class School extends Institute {
    students = [];
    constructor(name) {
        super(name);
    }
    getInstitutionType() {
        return "School";
    }
    addStudent(studentName) {
        this.students.push(studentName);
        console.log(`${studentName} added to ${this.name}`);
    }
    removeStudent(studentName) {
        const index = this.students.indexOf(studentName);
        if (index !== -1) {
            this.students.splice(index, 1);
            console.log(`${studentName} removed from ${this.name}`);
        }
        else {
            console.log(`${studentName} not found in ${this.name}`);
        }
    }
}
const mySchool = new School("Kamal Shishu Mandir");
mySchool.addStudent("Rahul");
mySchool.addStudent("Anita");
mySchool.removeStudent("Rahul");
//# sourceMappingURL=q7.js.map