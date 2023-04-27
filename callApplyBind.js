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

// Call is a function that helps you change the context of the invoking function. 
// In layperson's terms, it helps you replace the value of this inside a function with whatever value you want.

// Apply is very similar to the call function.
// The only difference is that in apply you can pass an array as an argument list.

// Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.



// Real Life Uses of Call Apply Bind

function car (type, fuelType) {
  console.log(this)
  this.type = type,
  this.fuelType = fuelType
}


function setBrand (brand) {
  car.call(this, 'convertible', 'petrol')
  this.brand = brand
  console.log(this)
}

function definePrice(price){
	car.call(this, "convertible", "diesel");
	this.price = price;
	console.log(`Car details = `, this);
}
const newBrand = new setBrand('Brand1');
const newCarPrice = new definePrice(100000);