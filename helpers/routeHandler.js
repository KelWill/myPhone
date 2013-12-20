var email        = require('./email.js');
var facebook     = require('./facebook.js');
var help         = require('./help.js');
var testing      = require('./testing.js');

module.exports = function(request, response, message){
  var array = message.split(' ');
  console.log(array);
  var doThis = {};
  doThis.platform = array[0].toLowerCase();
  doThis.method = array[1].toLowerCase();
  doThis.command = array[2].toLowerCase();
  if (doThis.command && doThis.command.slice(doThis.command.length - 1) === "+"){
    doThis.extra = array[3].toLowerCase();
    doThis.message = array.slice(4);
  } else {
    doThis.message = array.slice(3);
  }
  platforms[doThis.platform](request, response, doThis);
};

var platforms = {
  'gm' : email.handle,
  'em' : email.handle,
  'dm' : email.handle,
  'fb' : facebook.handle,
  'da' : facebook.handle,
  'aw' : testing.handle
};
