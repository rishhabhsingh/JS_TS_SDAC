class Company {
  static companyName: string = "ABC Pvt Ltd"
  employeeName: string

  constructor(employeeName: string) {
    this.employeeName = employeeName
  }

  display(): void {
    console.log("Employee Name:", this.employeeName)
    console.log("Company Name:", Company.companyName)
  }
}

let c1 = new Company("Amit")
c1.display()
