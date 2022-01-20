class Student {
  constructor (fullName, type){
    this.fullName = fullName;
    this.type = type;
  }
  showFullName() {
    return this.fullName;
  }
  nameIncludes(data){
  if (this.showFullName().includes(data)){
    return true;
  } else{
    return false;
  }
  }

  static studentBuilder(fullName, type){
    return new Student(fullName, type);
  }

}

const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koval', 'python');
const stud3 = Student.studentBuilder("Ihor Kohut", "qc");

console.log(stud1.showFullName());
console.log(stud2.showFullName());
console.log(stud1.nameIncludes('Ivan'));
console.log(stud1.nameIncludes('Ben')); 
console.log(stud3);