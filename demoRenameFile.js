var fs = require('fs');

fs.rename('myNewTextFile', 'SampleRenamed.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});