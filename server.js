var express = require('express');
var routeHandler = require('./helpers/routeHandler');

var port           = process.env.PORT || 3000;
var twilioSid      = process.env.TWILIO_SID;
var twilioAuth     = process.env.TWILIO_TOKEN;
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
  routeHandler(request, response, request.body);
});

app.get('*', function(request, response){
  response.end();
});

app.listen(port);
