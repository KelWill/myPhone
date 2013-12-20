var http = require('http');
var myTwilio = require('./myTwilio.js');

exports.handle = function(request, response, doThis){
  var callback = function(message){
    myTwilio.send(message);
    response.end();
  };

  var req = http.request({
    method: "GET",
    host: "uselessapi.azurewebsites.net",
    path: "/antarcticweather",
    headers: {
      "Content-Type": "application/json"
    }
  }, callback);
  req.end();
};