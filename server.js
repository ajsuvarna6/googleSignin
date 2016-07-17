var express=require('express'),
  app=express();
  http=require('http').createServer(app);

app.use('/',express.static(__dirname + '/public'));

http.listen(3000);
console.log("Server running on http://localhost:3000");
