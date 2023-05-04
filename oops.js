// Classical v/s Prototypal inheritance

// Inheritance: one object get access of property and methods of other object


// What is prototype

// All Objects(including functions) in JS have prototype property
// ProtoType property is reference to another object


const object1 = {
  firstName: 'Tarun',
  lastName: 'Lunia',
  getName: function() {
    console.log(this.firstName + ' ' + this.lastName)
  }
}

console.log(object1)


const john = {
  firstName: 'John',
  lastName: 'Doe',
}

john.__proto__ = object1

john.getName()