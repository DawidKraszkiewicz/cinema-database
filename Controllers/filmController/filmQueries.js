

const pool = require('../../DBcredentials/DBcredentials')
const getFilms = (request, response) => {
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
const createFilm = (request, response)=>{
    const film_title = request.body.film_title
    const genre = request.body.film_genre
    const year = request.body.year
    const director_id = request.body.director_id
    pool.query('INSERT INTO film (film_title, year, director_id, genre) VALUES( $1, $2, $3, $4)',[film_title, year, director_id, genre], (error, results)=>{
        if(error){
            throw error;
        }
        response.status(201).send(`film added with id: ${results.insertId}`)
    })
}
const updateFilm = (request, response) => {
    const id = parseInt(request.params.id)
    const film_title = request.body.film_title
    const genre = request.body.film_genre
    const year = request.body.year
    const director_id = request.body.director_id

    pool.query(
        'UPDATE film SET film_title = $1, genre = $2, year = $3, director_id = $4 WHERE id = $5',
        [film_title, genre, year, director_id, id], 
        (error, results) => {
            if(error){
                throw error;
            }
            response.status(200).send(`film modified with id ${id}`)
        }
    )
}
const deleteFilmById = (request, response) =>{
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM film WHERE id = $1', [id], (error, results) =>{
        if(error){
            throw error;
        }
        response.status(200).send(`deleted film from db with id: ${id}`)
    })

}

module.exports = {
    getFilms: getFilms,
    getFilmById: getFilmById,
    createFilm: createFilm,
    deleteFilmById: deleteFilmById,
    updateFilm: updateFilm,
}
