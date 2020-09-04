const db = require('./actorQueries')
const express = require('express')
const router = express.Router()



router.get('/api/actor', db.getActors)

router.get('/api/actor/:id', db.getActorById)

router.post('/api/actor', db.createActor)

router.put('/api/actor/:id', db.updateActor)

router.delete('/api/actor/:id', db.deleteActorById)

module.exports = router