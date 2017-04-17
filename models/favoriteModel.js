'use strict';

const { bookshelf } = require('../db/database')
require('./showModel')

const Favorite = bookshelf.Model.extend({
    tableName: 'favorite',
    show: function(){ return this.belongsTo(Show)}
  }, {
    getAll: function() {
      console.log("Get all called from Favorite Model");
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


// module.exports = Favorite;

// this way allows you to avoid circular dependency problems in bookshelf
module.exports = bookshelf.model('Favorite', Favorite);
