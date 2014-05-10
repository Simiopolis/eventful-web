var mongojs = require('mongojs');
var databaseUrl = 'eventful';
var collections = ['events'];
var mongo = mongojs(databaseUrl, collections);

exports.ping = function(req, res) {
	res.json({"message":"pong"});
};
