let fs = require('fs');

console.log('1')

fs.readFile('text.txt', 'utf8', function (e,d) {
  if(e) {
    throw e;
  }

  console.log('2')
})

console.log('3')
