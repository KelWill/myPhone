//storing messages after get, so that you can reply to the same messages
var db = require('./myFirebase.js');
var help = require('./help.js');
var MailParser = require('mailparser').MailParser;

var mailParser = new MailParser({debug: true});

mailparser.on("headers", function(headers){
  console.log(headers.received);
});

mailparser.on("end", function(mail){
  console.log(mail); // object structure for parsed e-mail
});

exports.handle = function(request, response, doThis){
  console.log('getting handled by email');
  if (doThis.method === "g"|| doThis.method === "r"){
    if (doThis.command && /r\.\d{1}/.test(doThis.command)){
      getMessage(request, response, doThis);
    } else {
      getInbox(request, response, doThis);
    }
  } else if (doThis.method === "w" || doThis.method === "s"){
    if (doThis.command && /r\.\d{1}/.test(doThis.command)){
      replyMessage(request, response, doThis);
    } else if (doThis.command && /w|s\.\d{1}/.test(doThis.command)){
      sendMessage(request, response, doThis);
    }
  } else {
    help.handle(request, response);
  }
};

var getInbox = function(){

};

var getMessage = function(){

};

var replyMessage = function(){

};

var sendMessage = function(){

};