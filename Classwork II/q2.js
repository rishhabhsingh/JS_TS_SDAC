class Emp{
    constructor(name, id, sal){
        this.name = name
        this.id = id
        this.sal = sal
    }

    displayInfo(){
        console.log("This is Name:" + " " + this.name)
        console.log("This is Id:" + " " + this.id)
        console.log("This is Salary:" + " " + this.sal)
    }
}

let emp = new Emp("Rahul", 18, 20000)
emp.displayInfo()
