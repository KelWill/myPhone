var express = require('express');

var port        = process.env.PORT || 3000;
var twilioSid   = process.env.TWILIO_SID;
var twilioAuth  = process.env.TWILIO_TOKEN;

var app = express();
app.use(express.bodyParser());

app.post('*', function(request, response){
  console.log(request.body);
  console.log(request.params);
  response.end();
});

app.get('*', function(request, response){
  response.end();
});

app.listen(port);
