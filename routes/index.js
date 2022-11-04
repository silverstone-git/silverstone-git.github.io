var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();
var childProcess = require('child_process');

var myStaticPath = path.join(__dirname, "../public");
var mailCommandFilePath = path.join(myStaticPath, "mailCommand.txt");

var nonce = Math.floor(Math.random()*(10**6)).toString();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {sandwich: nonce});
  //res.render('succ', { name: 'Expresss', message: "Good Morning Deer" });
});

router.post("/", function(req, res, next) {

var mailfail;

  function sendMyMail(theForm) {
    var command = fs.readFileSync(mailCommandFilePath, 'utf-8');
    const fullMessage = theForm.message + "\n ~ " + theForm.email;
    command = command.replace("hemlo", fullMessage);
    try {
      const output = childProcess.execSync(command, { encoding: 'utf-8' });
    } catch (error) {
      mailfail = true;
      res.render("fail", {name: req.body.name, message: "Your message was not received due to a server error, please try DM-ing me on instagram"})
    }
  }

  let formObject = 
  {
    message: req.body.message,
    email: req.body._replyto,
  }

  if(req.body.sandwich == nonce) {
    sendMyMail(formObject);
  } else {
    mailfail = true;
    res.render("fail", {name: req.body.name, message: "Your message was not received due to a form error, please try DM-ing me on instagram"})
  }

  if(!mailfail) {
    res.render("succ", {name: req.body.name, message: "Your message has been received, I will get back to you shortly"});
  }
})

module.exports = router;
