var mongoose = require('mongoose'),
	InvModel = require('../models/Invoice'),
	InvItems = require('../models/Items'),
	InvoiceModel = InvModel.getModel(),
	InvoiceItems = InvItems.getModel();

mongoose.connect('mongodb://localhost/billify');

Invoice = function(){};

var invoice = new InvoiceModel();

/*
* Begin Invoice Methods
*/

Invoice.prototype.createInvoice = function(obj) {
	invoice._clientId = obj._clientId;
	invoice.total = obj.total;
	invoice.status = obj.status;
	invoice.save(function(err){});
	console.log(invoice);
}

Invoice.prototype.getInvoiceById = function() {
	InvoiceModel.findById(id, function(err, doc){
		console.log(doc);
	});
}

Invoice.prototype.saveInvoice = function() {
	
}

Invoice.prototype.removeInvoice = function() {
	
}

/*
* Begin Invoice Items Methods
*/

Invoice.prototype.createInvoiceItem = function() {
	
}

Invoice.prototype.getInvoiceItemById = function() {
	
}

Invoice.prototype.saveInvoiceItem = function() {
	
}

Invoice.prototype.removeInvoiceItem = function() {
	
}

exports.Invoice = Invoice;