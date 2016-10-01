var express = require('express');
var groups = express.Router();

// Add a new group
groups.get('/', function(req, res) {
  res.send('POST - Wanna add a group? Groups root route.');
});

// Get a group by Id
groups.get('/:groupId', function(req, res) {
  var groupId = req.params.groupId;
  res.send('GET - Hello from Groups/' + groupId +  ' route.');
});

// Update a group by Id
groups.post('/:groupId', function(req, res) {
  var groupId = req.params.groupId;
  res.send('POST - Wanna update group ' + groupId + '?  Groups/' + groupId + ' route.');
});

// Get users list from a group by Id
groups.get('/:groupId/users', function(req, res) {
  var groupId = req.params.groupId;
  res.send('GET - Hello from Groups/' + groupId +  '/users route.');
});

// Add an user to a group by groupId/userId
groups.post('/:groupId/user/:userId', function(req, res) {
  var groupId = req.params.groupId;
  var userId  = req.params.userId;
  res.send('POST - Wanna add user ' + userId + 'to group ' + groupId + '? Groups/' + groupId +  '/user/' + userId + ' route.');
});

module.exports = groups;