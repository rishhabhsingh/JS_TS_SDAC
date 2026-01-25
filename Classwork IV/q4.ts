abstract class Person {
    abstract getRole(): string
    abstract getDetails(): string
}

class Student extends Person {
    name: string
    course: string

    constructor(name: string, course: string) {
        super()
        this.name = name
        this.course = course
    }

    getDetails(): string {
        return `Name: ${this.name}, Course: ${this.course}`
    }

    getRole(): string {
        return "Student"
    }
}

class Teacher extends Person {
    name: string
    subject: string

    constructor(name: string, subject: string) {
        super()
        this.name = name
        this.subject = subject
    }   
    getDetails(): string {
        return `Name: ${this.name}, Subject: ${this.subject}`
    }   
    getRole(): string {
        return "Teacher"
    }
}

function printPersonDetails(person: Person): void {
    console.log(`Role: ${person.getRole()}`)
    console.log(person.getDetails())
}

const student = new Student("Jerry", "Computer Science")
const teacher = new Teacher("Arjun", "Mathematics")
printPersonDetails(student)
printPersonDetails(teacher)
