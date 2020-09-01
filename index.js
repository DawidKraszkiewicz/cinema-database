const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');

const port = 3000;
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.get('/', (request, response) => {
    response.json({info: 'working'})
})
app.get('/film', db.getFilms);
app.get('/film/:id', db.getFilmById);
app.post('/film', db.createFilm);
app.put('/film/:id', db.updateFilm)
app.delete('/film/:id', db.deleteFilmById)
app.listen(port, ()=>{
    console.log(`app running on port ${port} `)
})
