abstract class Institute {
    name: string

    constructor(name: string) {
        this.name = name
    }

    abstract getInstitutionType(): string
}

interface Management {
    addStudent(studentName: string): void
    removeStudent(studentName: string): void
}

class School extends Institute implements Management {
    students: string[] = []

    constructor(name: string) {
        super(name)
    }

    getInstitutionType(): string {
        return "School"
    }

    addStudent(studentName: string): void {
        this.students.push(studentName)
        console.log(`${studentName} added to ${this.name}`)
    }

    removeStudent(studentName: string): void {
        const index = this.students.indexOf(studentName)
        if (index !== -1) {
            this.students.splice(index, 1)
            console.log(`${studentName} removed from ${this.name}`)
        } else {
            console.log(`${studentName} not found in ${this.name}`)
        }
    }
}

const mySchool = new School("Kamal Shishu Mandir")
mySchool.addStudent("Rahul")
mySchool.addStudent("Anita")
mySchool.removeStudent("Rahul")



