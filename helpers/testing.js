var http = require('http');
var myTwilio = require('./myTwilio.js');

exports.handle = function(request, response, doThis){
  console.log('whooohooooooo');
  var callback = function(res){
    var weather = '';
    res.on('data', function(chunk){
      weather+=chunk;
    });
    res.on('end', function(){
      myTwilio.send(weather);
    });
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
