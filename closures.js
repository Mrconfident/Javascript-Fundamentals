// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function's scope from an inner function. 
// In JavaScript, closures are created every time a function is created, at function creation time.

function greet(whatToSay) {
  return function(name) {
    console.log(whatToSay + ' ' + name) 
  }
}
var greetingName = greet('Hola')

console.log(typeof greetingName)
greetingName('tarunn')



function buildFunctions () {
  var arr = []

  for (var i = 0; i < 4; i++) {
    arr.push(
      (function() {
        console.log(i)
      })()
    )
  }
  return arr
}
var fs = buildFunctions();

for (var i = 0; i<4; i++) {
  fs[i];
}


// Some classic Examples of Closures
const e = 10

function sum(a) {
  return function () {
    return function () {
      return function () {
        return a + a + a + a  + e;
      }
    }
  }
}

const sum2 = sum(2);
const sum3 = sum2();
const sum4 = sum3();
const sum5 = sum4();

console.log(sum5)