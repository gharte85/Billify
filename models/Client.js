var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId,
	Invoices = require('./Invoice');

var clientSchema = mongoose.Schema({
	_id: ObjectId,
	name: String,
	address: String,
	phone: String,
	email: { type: String, required: true },
	created: { type: Date, default: Date.now }
});

var Client = mongoose.model('Client', clientSchema);

exports.getModel = function() {
	return Client;
}

exports.getSchema = function() {
	return clientSchema;
}