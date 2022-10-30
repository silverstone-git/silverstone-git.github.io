var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/greet", function(req, res, next) {
	res.send("sab thik ho jayega anand bhai");
})

module.exports = router;
