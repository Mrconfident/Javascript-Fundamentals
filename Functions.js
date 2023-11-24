// This is Function Statement
function greet () {
  const b = 'Hi'
  console.log(this)
  console.log('Hii')
}

greet.lang = 'en'

console.log(greet.lang)
greet()


// anonymous() {

// } Error 

// The above one is Function Expresion
const anonymous = function () {
  console.log('Expression')
}

anonymous()


// Arrow function

// arrow functions cannot be declared; they can only be expressed.

const arrow = () => {
  const a = 'Hii'
  console.log(this)
}

arrow()


const obj = {
  name: 'Tarun',
  class: 9,
  print: function () {
    console.log(this)
  }
}

obj.print()

/*
Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
Arrow functions cannot use yield within their body and cannot be created as generator functions. */







