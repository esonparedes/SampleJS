var fs = require('fs');

fs.unlink('myNewTextFile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});