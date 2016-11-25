"use strict";

const http = require("http")
      , SUCCESS = {
        version: 1.0,
        name: "Twitter do pai",
        created_at: Date.now()
      }
      , ERROR = {
        message: "Deu ruim"
      };


http.createServer(function(request, response) {
    if(request.url === '/api/v1') {
      response.writeHead(200, {'Content-Type':'application/json'});
      response.write(JSON.stringify(SUCCESS));
    } else {
      response.writeHead(404, {'Content-Type':'application/json'});
      response.write(JSON.stringify(ERROR));
    }


    response.end();

}).listen(3000, function() {
    console.log("Servidor rodando em localhot:3000");

})
