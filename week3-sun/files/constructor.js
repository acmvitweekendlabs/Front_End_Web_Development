// Constructor Function

function Person(firstname, lastname, dob) {
    this.firstname=firstname;
    this.lastname=lastname;
    this.dob= new Date(dob);
}
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}
Person.prototype.getFullName = () => {
    return `${this.firstname} ${this.lastname}`
}
// Instantiate object
const person1 = new Person('John', 'Doe', '3-31-1980');
const person2 = new Person('Mary', 'Atkins', '4-1-1991');

console.log(person1);
// console.log(person2.getFullName());