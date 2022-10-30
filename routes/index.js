var express = require('express');
var fs = require('fs')
var path = require('path')
var router = express.Router();
var childProcess = require('child_process');

var myStaticPath = path.join(__dirname, "../public")
var mailCommandFilePath = path.join(myStaticPath, "mailCommand.txt")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/", function(req, res, next) {
  console.log(req.body);

  function sendMyMail(theForm) {
    var command = fs.readFileSync(mailCommandFilePath, 'utf-8');
    const fullMessage = "Subject: " + theForm.subject + "\n" + theForm.message + "\n ~ " + theForm.email;
    command = command.replace("hemlo", fullMessage);
    const output = childProcess.execSync(command, { encoding: 'utf-8' });
    console.log('Output was:\n', output);
  }

  let formObject = 
  {
    message: req.body.message,
    email: req.body._replyto,
    subject: req.body.Subject
  }

  sendMyMail(formObject);
  res.render("succ", {name: req.body.name, message: "Your message has been received, I will get back to you shortly"});
})

module.exports = router;
