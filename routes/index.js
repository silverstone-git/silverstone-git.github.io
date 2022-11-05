var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();
var childProcess = require('child_process');

var myStaticPath = path.join(__dirname, "../public");
var mailCommandFilePath = path.join(myStaticPath, "mailCommand.txt");

var nonce;
var captcha;

function generateNonce() {
  return(Math.floor(Math.random()*(10**6)).toString());
}

function generateCaptcha() {
  var uniqueChar = "";
  const randomChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++) {
    uniqueChar += randomChar.charAt(
        Math.random() * randomChar.length)
  }
  return(uniqueChar);
}

captcha = generateCaptcha();
nonce = generateNonce();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {sandwich: nonce, toffee: captcha});
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
      res.render("fail", {name: req.body.name, message: "Your message was not received due to a server error, please try DM-ing me on instagram", sandwich: nonce, toffee: captcha})
      captcha = generateCaptcha();
      nonce = generateNonce();
    }
  }

  let formObject = 
  {
    message: req.body.message,
    email: req.body._replyto,
  }

  if(req.body.sandwich == nonce && req.body.captcha == captcha) {
    sendMyMail(formObject);
  } else if(req.body.sandwich != nonce) {
    mailfail = true;
    captcha = generateCaptcha();
    nonce = generateNonce();
    res.render("fail", {name: req.body.name, message: "Your message was not received due to a form error, please try refreshing the page", sandwich: nonce, toffee: captcha})
  } else {
    mailfail = true;
    captcha = generateCaptcha();
    nonce = generateNonce();
    res.render("fail", {name: req.body.name, message: "Entered Captcha was wrong, please try again", toffee: captcha, sandwich: nonce});
  }

  if(!mailfail) {
    captcha = generateCaptcha();
    nonce = generateNonce();
    res.render("succ", {name: req.body.name, message: "Your message has been received, I will get back to you shortly", sandwich: nonce, toffee: captcha});
  }
})

module.exports = router;
