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
var fs = buildFunctions()

for (var i = 0; i<4; i++) {
  fs[i]()
}