class Worker {
  
  constructor (fullName, dayRate, workingDays){
  this.fullName = fullName;
  this.dayRate = dayRate;
  this.workingDays = workingDays;
  }
  showFullName() {
    return this.fullName;
  }
  showSalary(){
    let salary = this.dayRate * this.workingDays;
    return `${this.fullName} salary: ${salary}`;
  }
  #expK = 1.2;
  showExp(){
    return this.#expK;
  }
  showSalaryWithExperience(){
    let newSalary = (this.dayRate * this.workingDays) * this.#expK;
    return `${this.fullName} salary: ${newSalary}`;
  }
  get getExp(){ return this.#expK};
  set setExp(value){ this.#expK = value};

  showNumber(){
    return (this.dayRate * this.workingDays) * this.#expK;
  }
}

const worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(worker1.showSalary());
console.log("New experience: " + worker1.showExp());
console.log(worker1.showSalaryWithExperience());
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp());
console.log(worker1.showSalaryWithExperience());

console.log("");

const worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
console.log(worker2.showSalary());
console.log("New experience: " + worker2.showExp());
console.log(worker2.showSalaryWithExperience());
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp());
console.log(worker2.showSalaryWithExperience());

console.log("");

const worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
console.log(worker3.showSalary());
console.log("New experience: " + worker3.showExp());
console.log(worker2.showSalaryWithExperience());
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp());
console.log(worker3.showSalaryWithExperience());

console.log("");
console.log("Sorted salary:");

function sortByNumber(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

let workerr1 = { name: worker1.fullName, age: worker1.showNumber() };
let workerr2 = { name: worker2.fullName, age: worker2.showNumber() };
let workerr3 = { name: worker3.fullName, age: worker3.showNumber() };

let arr = [workerr1, workerr2, workerr3];

sortByNumber(arr);

console.log((`${arr[0].name}: ${arr[0].age}`));
console.log((`${arr[1].name}: ${arr[1].age}`)); 
console.log((`${arr[2].name}: ${arr[2].age}`)); 
