var express = require('express');
var router = express.Router();

const users = [
  {id:0, username: "eray", url: "www.google.com"},
  {id:1, username: "ahmet", url: "www.google.com"},
  {id:2, username: "hasan", url: "www.google.com"},
  {id:3, username: "mehmet", url: "www.google.com"}
];

/* GET users listing. */
router.get('/', function(req, res) {
  res.status(200).json(users);
});

module.exports = router;
