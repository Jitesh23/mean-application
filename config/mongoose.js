var config = require('./config'),
    mongoose = require('mongoose');


module.exports = function(){

  var db = mongoose.connect(config.db);

  require('../app/models/index.server.model.js')
  require('../app/models/article.server.model');
  return db;

}
