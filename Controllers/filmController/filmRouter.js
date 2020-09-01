const db = require('./filmQueries')
const express = require('express')
const router = express.Router()



router.get('/film', db.getFilms)

router.get('/film/:id', db.getFilmById)

router.post('/film', db.createFilm)

router.put('/film/:id', db.updateFilm)

router.delete('/film/:id', db.deleteFilmById)

module.exports = router
   
