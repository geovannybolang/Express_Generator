var express = require('express');
var router = express.Router();
const { index, getUserById } = require("./controller");

/* GET home page. */
router.get('/users', index);
router.get("/users/:id", getUserById);

module.exports = router;
