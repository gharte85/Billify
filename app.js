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

function postInvoice(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.send(req.params);
}

server.post('/invoice/create', postInvoice); // This now returns an empty object {}


server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});