const db = require('./filmQueries')
const express = require('express')
const router = express.Router()



router.get('/api/film', db.getFilms)

router.get('/api/film/:id', db.getFilmById)

router.post('/api/film', db.createFilm)

router.put('/api/film/:id', db.updateFilm)

router.delete('/api/film/:id', db.deleteFilmById)

module.exports = router;
   
