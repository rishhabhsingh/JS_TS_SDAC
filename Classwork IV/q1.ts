class Emp {
  name: string;
  id: number;
  salary: number;
  address: string;

  constructor(name: string, id: number, salary: number, address: string) {
    this.name = name;
    this.id = id;
    this.salary = salary;
    this.address = address;
  }

  displayInfo(): void {
    console.log("Name:", this.name);
    console.log("ID:", this.id);
    console.log("Salary:", this.salary);
    console.log("Address:", this.address);
  }
}

let emp1 = new Emp("Rahul", 101, 30000, "Delhi");
emp1.displayInfo();
