// 'use strict'

let hasDriverLicense = false
const passedTest = true
if(passedTest) {
  hasDriverLicense = true
}
if (hasDriverLicense) {
  console.log('I am having Licence')
}

// Functions

function logger () {
  console.log('My name is Tarun')
}
logger() // invoking a Function
logger()
logger()
logger()
logger()
logger()

const myAge = calAge1(1998)
console.log(myAge)
// function declaration
function calAge1 (birthYear) {
  const currYear = 2022
  return currYear - birthYear
}

// const myAge = calAge1(1998)
// console.log(myAge)

// function expression

// console.log(calcAge2(1996)) // we cant do that
const calcAge2 = function (birthYear) {
  return 2022 - birthYear
}

console.log(calcAge2(1996))


