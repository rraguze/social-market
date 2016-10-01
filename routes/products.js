var express = require('express');
var products = express.Router();

// Add a new product
products.post('/', function(req, res) {
  var productId = req.params.productId;
  res.send('POST - Wanna add a product? Products root route.');
});

// Get a product by Id
products.get('/:productId', function(req, res) {
  var productId = req.params.productId;
  res.send('GET - Hello from Products/' + productId +  ' route.');
});

// Update a product by Id
products.post('/:productId', function(req, res) {
  var productId = req.params.productId;
  res.send('POST - Wanna update product ' + productId + '?  Products/' + productId + ' route.');
});

// Get product list by product type
products.get('/:productType', function(req, res) {
  var productType = req.params.productType;
  res.send('GET - Hello from Products/' + productType +  ' route.');
});

module.exports = products;