var a = [
  1,
  {
    name: 'Tarun',
    age: 20
  },
  function(name) {
    console.log(arguments) // This is an array of parameters passed in the Function
    var greeting = 'Hello'
    console.log(greeting + ' ' + name)
  },
  false
]

console.log(a)

a[2](a[1].name)


// Argument