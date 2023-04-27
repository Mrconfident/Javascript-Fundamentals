

// pass by value (primitive)

var a = 3
var b = a 
a = 5

console.log(a)
console.log(b)


// pass by refernece (in case of Objects (including Functions))


var c = {
  name: 'tarun'
}

var d = c

c.name = 'Guddu' // mutating the property of Object
console.log(d)
console.log(c)


// This argument is also pass by reference
function changeName(obj) {
  obj.name = 'Hello'
}

changeName(d)
console.log(d)
console.log(c)


// equals operator sets up new memory in space
c = {
  greet: 'Hello Mr'
}
// Special case

console.log(d)
console.log(c)





