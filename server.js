var express = require('express');
var routeHandler = require('./helpers/routeHandler');

var port           = process.env.PORT || 3000;
var myNum          = process.env.MY_NUMBER;
var twilioNum      = process.env.TWILIO_NUMBER;

var app = express();
app.use(express.bodyParser());

app.post('*', function(request, response){
  //only accepts texts from my cellphone
  if (request.body.From !== myNum){
    response.writeHead(400);
    response.end();
  }
  var message = request.body;
  routeHandler(request, response, request.body.Body);
});

app.get('*', function(request, response){
  response.send(JSON.stringify(routeHandler));
});

app.listen(port);
