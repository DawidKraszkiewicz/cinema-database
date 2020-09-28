const db = require('./bookQueries')
const express = require('express')
const router = express.Router()

router.get('/api/film/booking/:id', db.getFilmHours)

module.exports = router;