var url = require('url');
var adr = 'http://localhost:8090/index.html?year=2018&month=August&day=15'
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.day);