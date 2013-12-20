var twilioSid      = process.env.TWILIO_SID;
var twilioAuth     = process.env.TWILIO_TOKEN;
var client         = require('twilio')(accountSid, authToken);
var myNum          = process.env.MY_NUMBER;
var twilioNum      = process.env.TWILIO_NUMBER;


exports.send = function(text){
  client.sms.messages.create({
    body: text,
    to: myNum,
    from: twilioNum
  }, function(err, sms) {
    console.log(sms.sid);
    if (err) console.log(err);
  });
};