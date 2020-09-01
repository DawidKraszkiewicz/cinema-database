const { response } = require('express');

const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cinema',
    password: 'kraszka19741',
    port: 5432,
})
const getFilms = (request,response) => {
    pool.query('SELECT * FROM film', (error, results)=>
    {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getFilmById = (request, response)=>{
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM film WHERE id = $1', [id], (error, results) =>{
        if(error){
            console.log(results);
            return response.send("an error occured");
        }
        response.status(200).json(results.rows)
    })
}
const createFilm = (request,response)=>{
    const { film_title, year, director_id, genre } = request.body
    pool.query('INSERT INTO film (film_title, year, director_id, genre) VALUES( $1, $2, $3, $4)',[film_title, year, director_id, genre], (error, results)=>{
        if(error){
            throw error;
        }
        response.status(201).send(`film added with id: ${results.insertId}`)
    })
}
module.exports = {
    getFilms: getFilms,
    getFilmById: getFilmById,
    createFilm: createFilm
}
