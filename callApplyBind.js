var person = {
  firstName: 'Tarun',
  lastName: 'Lunia',
  getFullName: function() {
    var fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}

var logName = function (lang1, lang2) {
  console.log(this)
  console.log('Logged: ' + this.getFullName())
}// .bind(person) // We can Also Bind Like This

logName.bind(person)() // Binding An Object To a Function(which is an Object in JS)


var check = function (check1, check2) {
  console.log('Name of the Person Who is Checking', this.getFullName())
  console.log(arguments)
}

// In call, first parameter is the reference to this, 
// and rest are the arguments required for the Function call
check.call(person, 1, 2) 

// In Apply, first parameter is the reference to this, 
// and rest are the arguments required for the Function call passed as an array
check.apply(person, [1, 2])

// Both call and apply do 2 things bind + invoking the function 
// bind only does one thing (it does not call the Function)