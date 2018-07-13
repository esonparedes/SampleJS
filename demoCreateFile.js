var fs = require('fs');

fs.appendFile('myNewTextFile', 'sample content', function(err) {
    if (err) throw err;
    console.log('File Saved!');
});