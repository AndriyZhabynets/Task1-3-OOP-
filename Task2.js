class Person {
  constructor (name, surname){
    this.name = name;
    this.surname = surname;
  }
   showFullName() {
    let fullName = (this.name + this.surname);
    return fullName;
  }
}

class Student extends Person {
  constructor (name, surname, year){
    super(name, surname);
    this.year = year;
  }
  showFullName(midleName) {
    let full = (super.showFullName() + midleName)
    return full;
  }
  showCourse(){
    let course = (2022 - this.year);
    return course;
  }
}


const stud1 = new Student("Petro", " Petrenko", 2017);


console.log(stud1.showFullName(" Petrovych"));
console.log("Current course: " + stud1.showCourse());