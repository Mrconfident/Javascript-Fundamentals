// Function Factory means a Function can return or Create Something For me

function greeting (language) {
  return function (firstName, lastName) {
    if (language === 'en') {
      console.log('Hello' + ' ' + firstName + ' ' + lastName)
    }
    if (language === 'es') {
      console.log('Hola' + ' ' + firstName + ' ' + lastName)
    }
  }
}


// Now for the above case the language variable is trapped in a Closure

var greetEnglish = greeting('en')
greetEnglish('Tarun', 'Lunia')

var greetSpanish = greeting('en')

greetSpanish('Tarun', 'Lunia')
