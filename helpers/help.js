var myTwilio = require('./myTwilio.js');

exports.handle = function(message, response){
  response.end();
};

var commands = "gm: email, fb: facebook, g: get, r.1-8: read message, p: post";