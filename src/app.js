var http = require('http');
const { env } = require('process');
const url = require('url');

var server = http.createServer(function(request, response) {

    var reqUrl = url.parse(request.url,true);
    if(reqUrl.pathname != null && reqUrl.pathname.indexOf(process.env.context) !== -1){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("Hello, Welcome to Engineering Lab! Start editing to see some magic happen :)");
    }else {
        response.writeHead(404);
        response.end("Not found");
    }
});

var port = process.env.port || 3005;
server.listen(port);
module.exports = server
console.log("Server running on Port:", port);
