const path = require('path');
const friends = require('../data/friends.js')

module.exports = function(app){
  app.get('/api/friends', function(req, res){
    res.json(friends);
  });

  app.post('/api/friends', function(req, res){
    alert(req.body);
    friends.push(req.body);
    res.json();
  });
}
