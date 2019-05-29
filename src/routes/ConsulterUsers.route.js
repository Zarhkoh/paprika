var express = require('express');
var router = express.Router();

const consulterUsersController = require('../controllers/ConsulterUsers.controller')
/* GET users listing. */
router.get('/',
  consulterUsersController.consulterUsers
);

module.exports = router;
