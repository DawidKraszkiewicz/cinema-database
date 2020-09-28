var path = require('path');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const filmRouter = require('./Controllers/filmController/filmRouter')
const actorRouter = require('./Controllers/actorController/actorRouter')
const bookingRouter = require('./Controllers/bookingController/bookRouter')
const app = express();
const PORT = process.env.PORT || 3000;
const dir = path.join(__dirname, '/images')
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
// Add headers
var corsOptions = {
    origin: "http://localhost:4200"
  };
  
app.use(cors(corsOptions));
  
app.use('/images', express.static(dir))
app.use(actorRouter, filmRouter, bookingRouter)

 
app.listen(PORT, ()=>{
    console.log(`app running on port ${PORT} `)
})

