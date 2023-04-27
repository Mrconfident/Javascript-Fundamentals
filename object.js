var person = new Object()


// Computed Member Access
person['firstName'] = 'Tarun'
person['lastName'] = 'Lunia'



// Member Access
person.age = 25





person.address = new Object()

person.address.pincode = '331803'
person.address.street = 'ward 26'

person.address.state = 'Raj'
person.address.district = 'Bikaner'


console.log(person.address.state)

console.log(person.address.street)


console.log(person['address']['district'])



console.log(person)



const school = {
  name: 'SSPS',
  code: 11712784,
  address: {
    zipCode: '331803',
    state: 'Raj',
    street: '30',
    area:'SDGH'

  },
  type: 'Boarding'
}  // These curly braces are called as Object Literals


console.log(school)

// a = school shallow Copy

// const a = JSON.parse(JSON.stringify(school)) // deep Copy
const a = {...school }
a.address.street = '29'
a.type = 'Day'
console.log(school)
console.log(a)



// Shallow Copy Example 
let person1 = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};


let copiedPerson = Object.assign({}, person1);

copiedPerson.firstName = 'Jane'; // disconnected

copiedPerson.address.street = 'Amphitheatre Parkway'; // connected
copiedPerson.address.city = 'Mountain View'; // connected

console.log(copiedPerson);
console.log(person1);

