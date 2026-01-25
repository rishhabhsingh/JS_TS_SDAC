interface Attendance {
    markAttendance(): string
}

class Student implements Attendance {
    name: string
    isPresent: boolean

    constructor(name: string) {
        this.name = name
        this.isPresent = false
    }
    markAttendance(): string {
        if (this.isPresent) {
            return `${this.name}'s attendance is already marked as present`;
        } else {
            this.isPresent = true;
            return `${this.name}'s attendance marked as present`;
        }
    }
}

const student = new Student("Jerry")
console.log(student.markAttendance())