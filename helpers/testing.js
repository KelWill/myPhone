var http = require('http');
var myTwilio = require('./myTwilio.js');

exports.handle = function(request, response, doThis){
  console.log('whooohooooooo');
  var callback = function(message){
    console.log(arguments);
    myTwilio.send(message);
    response.end();
  };

  var req = http.request({
    method: "GET",
    host: "http://uselessapi.azurewebsites.net",
    path: "/antarcticweather",
    headers: {
      "Content-Type": "application/json"
    }
  }, callback);
  req.end();
};

