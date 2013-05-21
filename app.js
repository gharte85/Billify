var util = require('util'),
	assert = require('assert'),
    restify = require('restify'),
    restifyValidator = require('restify-validator'),
    server = restify.createServer({ name: 'Billify' });

server.use(restify.bodyParser());
server.use(restify.queryParser());
server.use(restifyValidator);

/*
* TODO: Create a client controller
*
var Client = require('./controllers/Client').Client;
var Client = new Client();
*/

var Invoice = require('./controllers/Invoice').Invoice;
var Invoice = new Invoice();


server.post('/invoice/create', function(req, res) {
	Invoice.createInvoice(req, res);
});


server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});