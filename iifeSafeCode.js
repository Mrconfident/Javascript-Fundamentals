var greetings = 'Hola';

// IIFE
(function () {
  var greetings = 'hello I am a IIFE made by MR TL'
  console.log(greetings)
}());


console.log(greetings)

// Now the Advantage of the IIFE is both the greetings variables are present 
// but in different Execution Context.

// By this the outer Global EC is not Effected and our Code is Said to be the Safe Code