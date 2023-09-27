const fs = require('fs');
require('dotenv').config();

//load the database
const sql = fs.readFileSync('setup.sql').toString();
// get data backgroundSize: 
const db = require('./db');
//
db.query(sql)
.then(data => console.log("set up comp"))
.catch(err => console.error(err))