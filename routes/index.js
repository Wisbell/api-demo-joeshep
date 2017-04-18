'use strict';

const { Router } = require('express');
const router = Router();

const { getShows, getShowFaves } = require('../controllers/showCtrl')

router.get('/shows', getShows)
router.get('/shows/favorites', getShowFaves) // localhost:3000/api/v1/shows/favorites?showId=3
router.get('/shows/:id', getShows)

module.exports = router;
