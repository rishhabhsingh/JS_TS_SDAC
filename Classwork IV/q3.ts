class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let p1 = new Person("Sita", 20);
console.log(p1);
