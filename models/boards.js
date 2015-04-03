console.log('inside boards.js');

var restful = require('node-restful');

var mongoose = restful.mongoose;


//Schema
var boardsSchema = new mongoose.Schema({
	location : String,
	landmark : String,
	pincode : String,
	city : String,
	state : String,
	height : Number,
	width : Number,
	heightfromground : Number
});


//Return model

module.exports = restful.model('boards', boardsSchema);