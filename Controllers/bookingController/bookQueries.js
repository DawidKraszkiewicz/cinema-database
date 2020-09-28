const pool = require('../../DBcredentials/DBcredentials')

const getFilmHours = (request, response)=>{
    const id = parseInt(request.params.id)

    pool.query('SELECT film.id, film.film_title, film_dates.film_date,film_hours.film_hour FROM film JOIN film_dates ON film.id = film_dates.film_id JOIN film_hours ON film_dates.id = film_hours.film_date_id  WHERE film.id = $1 ', [id], (error, results) =>{
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}
module.exports = {
    getFilmHours: getFilmHours,
}