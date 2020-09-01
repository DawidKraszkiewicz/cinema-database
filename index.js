const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const db = require('./queries');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.get('/', (request, response) => {
    response.json({info: 'working'})
})
app.get('/film', db.getFilms);
app.get('/film/:id', db.getFilmById);
app.post('/film', db.createFilm);
app.listen(port, ()=>{
    console.log(`app running on port ${port} `)
})
