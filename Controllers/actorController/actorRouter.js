const db = require('./actorQueries')
const express = require('express')
const router = express.Router()



router.get('/actor', db.getActors)

router.get('/actor/:id', db.getActorById)

router.post('/actor', db.createActor)

router.put('/actor/:id', db.updateActor)

router.delete('/actor/:id', db.deleteActorById)

module.exports = router