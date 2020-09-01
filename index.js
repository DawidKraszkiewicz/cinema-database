const express = require('express');
const bodyParser = require('body-parser');
const router = require('./Controllers/filmController/filmRouter.js', './Controllers/actorController/actorRouter.js')

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(router)
app.listen(port, ()=>{
    console.log(`app running on port ${port} `)
})
