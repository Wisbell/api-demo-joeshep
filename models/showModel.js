'use strict';

const { bookshelf } = require('../db/database')
require('./favoriteModel')

const Show = bookshelf.Model.extend({
    tableName: 'shows',
    upvotes: function(){ return this.hasMany('Favorite')}
  }, {
    getAll: function() {
      console.log("Get all called from Show Model");
      return this.forge()
      .fetchAll()
      .then( (rows) => {
        return rows
      })
      .catch( (error) => {
        return error
      })
    }
})


// module.exports = Show;
// this way allows you to avoid circular dependency problems in bookshelf
module.exports = bookshelf.model('Show', Show);
