
const pool = require('../../DBcredentials/DBcredentials.js')


const getActors = (request, response) => {
    pool.query('SELECT * FROM actor', (error, results) =>{
        if(error){
            throw error;
        }
        response.status(200).json(results.rows)
    })

}

const getActorById = (request, response)=>{
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM actor WHERE id = $1', [id], (error, results) =>{
        if(error){
            console.log(results);
            return response.send("an error occured");
        }
        response.status(200).json(results.rows)
    })
}
const createActor = (request, response)=>{
    const name = request.body.name
    const surname = request.body.surname
    pool.query('INSERT INTO actor (name, surname) VALUES( $1, $2)',[name, surname], (error, results)=>{
        if(error){
            throw error;
        }
        response.status(201).send(`actor added with id: ${results.insertId}`)
    })
}
const updateActor = (request, response) => {
    const id = parseInt(request.params.id)
    const name = request.body.name
    const surname = request.body.surname

    pool.query(
        'UPDATE actor SET name = $1, surname = $2, WHERE id = $3',
        [name, surname, id], 
        (error, results) => {
            if(error){
                throw error;
            }
            response.status(200).send(`actor modified with id ${id}`)
        }
    )
}
const deleteActorById = (request, response) =>{
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM actor WHERE id = $1', [id], (error, results) =>{
        if(error){
            throw error;
        }
        response.status(200).send(`deleted actor from db with id: ${id}`)
    })

}

module.exports = {
    getActors: getActors,
    getActorById: getActorById,
    createActor: createActor,
    deleteActorById: deleteActorById,
    updateActor: updateActor,
}
