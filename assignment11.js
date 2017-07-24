/**
 * Created by oliviac16 on 7/23/17.
 */
var http = require('http');

http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'text/html'});

    res.end('Hello world,my name is Olivia Bowman');

}).listen(8001,'127.0.0.1');