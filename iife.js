// immediately invoked functions



// Function Statement


function greet (name) {
  console.log('Hello my name is ' + name)
}

greet('Tarun')

// Function Expression

var greetings = function (name) {
  console.log('Hello my name is ' + name)
}

greetings('Tarun')


// Using Immediately Invoked Function Expression (IIFE)
var greetFunc = function (name) {
  console.log('Hello my name is ' + name)
}('Shyamu')

// console.log(typeof greetFunc) // Undefined Because Function is not returning anything


var check = function (age) {
  return 'My age is ' + age
}(24);

// console.log(typeof check) // String because Function is Returning String


// function (name) {
//   return name
// } 

// This is an Wrong Syntax to write a anonymous Function(we have to enclose in the Parenthesis)


// This below one is also an IIFE(Just trying to fool Syntax parser)

(function (name) {
  console.log(name)
}('Tarun'));

(function (name) {
  console.log('Hello this is IIFE Function made by ' + name)
})('tarun')

// We can invoke the parenthesis based IIFE by both the ways(Above 2 invokation)
