var express = require('express');
var users = express.Router();

// Add a new user
users.post('/', function(req, res) {
  res.send('POST - Wanna add an user? Users root route.');
});

// Get a user by Id
users.get('/:userId', function(req, res) {
  var userId = req.params.userId;
  res.send('GET - Hello from Users/' + userId +  ' route.');
});

//Update a user by Id
users.post('/:userId', function(req, res) {
  var userId = req.params.userId;
  res.send('POST - Wanna update user ' + userId + '? Users/' + userId + ' route.');
});

// Get purchase history to user by Id
users.get('/:userId/history', function(req, res) {
  var userId = req.params.userId;
  res.send('GET - Hello from Users/' + userId +  '/history route.');
});

// Add purchase history to user by Id
users.post('/:userId/history', function(req, res) {
  var userId = req.params.userId;
  res.send('POST - Wanna add history to ' + userId + '? Users/' + userId + '/history route.');
});

// Get groups list from user by Id
users.get('/:userId/groups', function(req, res) {
  var userId = req.params.userId;
  res.send('GET - Hello from Users/' + userId +  '/groups route.');
});

module.exports = users;