
const Person = function(first, last) {

  let firstName = first;
  let lastName = last;
  let fullName = firstName + " " + lastName;

  this.setFirstName = function(value){
    firstName = value;
    this.setFullName(firstName, lastName);
  }

  this.setLastName = function(value){
    lastName = value;
    this.setFullName(firstName, lastName);
  }

  this.setFullName = function(firstSet, lastSet) {
    firstName = firstSet;
    lastName = lastSet;
    fullName = firstSet + " " + lastSet;
  }

  this.getFirstName = function() {
    return firstName;
  }

  this.getLastName = function() {
    return lastName;
  }

  this.getFullName = function() {
    return fullName;
  };
};

let newPerson = new Person('Bob', 'Ross');

console.log( newPerson.getFullName() );
newPerson.setFirstName('Haskell')
console.log( newPerson.getFullName() );