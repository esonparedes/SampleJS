var http = require('http');
var url = require('url');

//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + "/" + q.month + "/" + q.day;
    res.end(txt); //end the response
}).listen(8090);