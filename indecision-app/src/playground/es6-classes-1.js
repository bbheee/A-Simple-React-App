class Person {
  constructor(name = "anony", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    //return 'hi ' + this.name +'!';
    return `hi! i am ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super();
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Thier major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homelocation) {
    super(name, age);
    this.homelocation = homelocation;
  }

  getDescription() {
    let description = super.getDescription();
    if (this.homelocation) {
      description += `I am visiting ${this.homelocation}.`;
    }
    return description;
  }
}

const me = new Traveler("Andree", 26, "new york");
console.log(me.getDescription());

const other = new Traveler();
console.log(other.getDescription());
