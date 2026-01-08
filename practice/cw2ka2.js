class Emp{
    constructor(name = "Rishabh", id= 12, salary= 25000){
        this.name = name
        this.id = id
        this.salary = salary
    }

    displayInfo() {
        return this.name, this.id, this.salary 
    }
}

const e = new Emp()
console.log(e.displayInfo())
