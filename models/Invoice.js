var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId,
	Items = require('./Items');

var invoiceSchema = mongoose.Schema({
	_id: ObjectId,
	_clientId: { type: String, required: true },
	created: { type: Date, default: Date.now },
	invoiceItems: [Items.getSchema()],
	total: Number,
	status: {type: String, required: true }
});

var Invoice = mongoose.model('Invoice', invoiceSchema);

exports.getModel = function() {
	return Invoice;
}

exports.getSchema = function() {
	return invoiceSchema;
}