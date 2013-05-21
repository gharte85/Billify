var mongoose = require('mongoose'),
	InvModel = require('../models/Invoice'),
	InvItems = require('../models/Items'),
	util = require('util'),
	InvoiceModel = InvModel.getModel(),
	InvoiceItems = InvItems.getModel();

mongoose.connect('mongodb://localhost/billify');

Invoice = function(){};

var invoice = new InvoiceModel();

/*
* Begin Invoice Methods
*/

Invoice.prototype.createInvoice = function(req, res) {
	var obj = req.params;


	req.assert('_clientId').notEmpty().isInt();
	req.assert('total').notEmpty().isInt();
	req.assert('status').notEmpty().isAlpha();

	var errors = req.validationErrors();

	if (errors) {
		res.send(500 ,'There have been validation errors: ' + util.inspect(errors));
		return;
	} 

	invoice._clientId = obj._clientId;
	invoice.total = obj.total;
	invoice.status = obj.status;
	invoice.save(function(err){});

	res.json({ 'msg':'success' });
	res.end();
}

Invoice.prototype.getInvoiceById = function(req, res) {
	InvoiceModel.findById(id, function(err, doc){
		console.log(doc);
	});
}

Invoice.prototype.saveInvoice = function(req, res) {
	
}

Invoice.prototype.removeInvoice = function(req, res) {
	
}

/*
* Begin Invoice Items Methods
*/

Invoice.prototype.createInvoiceItem = function(req, res) {
	
}

Invoice.prototype.getInvoiceItemById = function(req, res) {
	
}

Invoice.prototype.saveInvoiceItem = function(req, res) {
	
}

Invoice.prototype.removeInvoiceItem = function(req, res) {
	
}

exports.Invoice = Invoice;