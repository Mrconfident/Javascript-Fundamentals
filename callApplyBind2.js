// Real Life Uses of Call Apply Bind

function car (type, fuelType) {
  this.type = type,
  this.fuelType = fuelType
}


function setBrand (brand) {
  car.call(this, 'convertible', 'petrol') // Function Borrowing
  this.brand = brand
}

function definePrice(price){
	car.bind(this, "SUV", "diesel")();
	this.price = price;
}

new car('XUV', 'Electric')

new setBrand('Audi')

new definePrice('$150000000')


// Using new keyword will create a new Reference of that Object/Functions