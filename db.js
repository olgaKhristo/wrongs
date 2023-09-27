const {Pool} = require('pg');

// how we connect to database
const db = new Pool({

    connectionString: process.env.DB_URL
});


module.exports = db;

