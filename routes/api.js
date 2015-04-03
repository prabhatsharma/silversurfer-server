console.log('inside api.js');
var express = require('express');
var router = express.Router();

//Set up the boards API
var board = require('../models/boards');
board.methods(['get','post','put','delete']);
board.register(router,'/boards');


module.exports = router;
