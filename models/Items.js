var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var invoiceItemSchema = mongoose.Schema({
	_id: ObjectId,
	description: String,
	rate: Number,
	hours: Number,
	taskTotal: Number
});

var InvoiceItems = mongoose.model('InvoiceItems', invoiceItemSchema);

exports.getSchema = function() {
	return invoiceItemSchema;
}

exports.getModel = function() {
	return InvoiceItems;
}