var http = require("http");

http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write("<h1>Hello HTTP</h1>");
    response.end();

}).listen(3000, function() {

    console.log("servidor rodando em servidor localhost:3000");

});
