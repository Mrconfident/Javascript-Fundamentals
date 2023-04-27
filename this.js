// console.log(this) // Will be pointing to Global Object

function a () {
  this.name = 'Tarun'
  console.log(this.name)
}

var b = function () {
  this.name = 'Shyamu'
  console.log(this.name)
}

a()
b()



const c = {
  name: 'The C Object',
  log: function() {
    const thisOfC = this
    console.log(thisOfC) // Here This Points to the Refernece of C Object
    thisOfC.name = 'Updated C Object!'
    console.log(thisOfC)
    function setName (newName) {
      // console.log(this) // Now Here This is Pointing to the global Object(Wired Behaviour of JS)
      thisOfC.name = newName
      console.log(thisOfC)
    }
    setName('Tarun Lunia')
  }
}

c.log()

