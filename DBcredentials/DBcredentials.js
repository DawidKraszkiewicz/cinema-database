const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'db user',
    host: 'your host',
    database: 'your db name',
    password: 'your pswd',
    port: your port,
})
module.exports  = pool;
