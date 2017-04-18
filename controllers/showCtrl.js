'use strict';

const { bookshelf } = require('../db/database')
const Show = require('../models/showModel')


module.exports.getShows = (req, res, next) => {
  Show.getAll()
  .then( (shows) => {
    // console.log('shows', shows.toJSON())
    res.status(200).json(shows);
  })
  .catch( (error) => {
    next(error);
  })
}



module.exports.getShowFaves = ({query: {showId}}, res, next) => {
  console.log('The query string', showId)
  Show.forge({id: showId})
  .fetch({withRelated: ['upvotes'], require: true})
  .then( (faves) => {
    console.log('faves', faves.toJSON())
    res.status(200).json(faves)
  })
  .catch( (err) => {
    next(err)
  })
}
