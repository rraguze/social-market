var express = require('express');
var markets = express.Router();

// Add a new market
markets.post('/', function(req, res) {
  res.send('POST - Wanna add a market? Market root route.');
});

// List markets
markets.get('/', function(req, res) {
  res.send('GET - Hello from markets/ route.');
});

// Get a market by Id
markets.get('/:marketId', function(req, res) {
  var marketId = req.params.marketId;
  res.send('GET - Hello from markets/' + marketId +  ' route.');
});

// Update a market by Id
markets.post('/:marketId', function(req, res) {
  var marketId = req.params.marketId;
  res.send('POST - Wanna update market ' + marketId + '?  Markets/' + marketId + ' route.');
});

// Get list of products by market Id
markets.get('/:marketId/products', function(req, res) {
  var marketId = req.params.marketId;
  res.send('GET - Hello from markets/' + marketId +  '/products route.');
});

module.exports = markets;