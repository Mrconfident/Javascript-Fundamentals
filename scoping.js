'use strict'

function calcAge (birthYear) {
  const age = 2037 - birthYear
  console.log(firstName)
  function printAge() {
    const output = `${firstName} You are ${age} born in ${birthYear}`
    console.log(output)
    if (birthYear >= 1981 && birthYear <=1996) {
      var millenial = true
      const str = `Oh You are millenial ${firstName}`
      console.log(str)
      console.log(millenial)
      function add (x,y) {
        return x+y
      }
    }
    // console.log(add(2,3))
    // console.log(str)
  }
  printAge()
  return age
}

const firstName = 'Tarun'
calcAge(1991)
// printAge()