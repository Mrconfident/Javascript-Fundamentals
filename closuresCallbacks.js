function sayHiLater () {
  var greeting = 'Hii'
  setTimeout(function () {
    console.log(greeting)
  }, 3000)
}

sayHiLater()


// Callback Function
// A function you give to another function, to be run when the other function is Finished
// So when we call a function, calls back by calling the function you gave it when it finishes


function tellMeWhenDone(callback) {
  var a = 1000; // some work
  var b = 2000; 

  callback()
}
tellMeWhenDone(function () {
  console.log("Hello")
})

tellMeWhenDone(function() {
  alert('Hello I am Tarun')
})


