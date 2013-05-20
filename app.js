var restify = require('restify');  
var server = restify.createServer({ name: 'Billify' });
server.use(restify.bodyParser());

/*
var Client = require('./controllers/Client').Client;
var Client = new Client();
*/
var Invoice = require('./controllers/Invoice').Invoice;
var Invoice = new Invoice();

//Invoice.createInvoice();

server.get('/invoice/create', function(res, req, next) {
	res.send(200, "Test");
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
