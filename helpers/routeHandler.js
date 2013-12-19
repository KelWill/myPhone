var email        = require('./email.js');
var facebook     = require('./facebook.js');
var requestHelp  = require('/.requestHelp.js');

exports = function(message, response){
  var command = message.slice(0, 10);
  if (command.test(/gm/)){
    email.handle(message);
  } else if (command.test(/fb/){
    facebook.handle(message);
  } else {
    requestHelp.handle(message);
  }
};