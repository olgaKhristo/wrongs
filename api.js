const express = require('express');
const cors = require('cors');
const fs = require('fs');
const api = express();

api.use(express.json());
api.use(cors());

const db = require('./db');

api.get('/', (req, res) => res.send('Hello World!'));
api.get("/wrongs", async(req, res) => {
    const sql = fs.readFileSync('getwrong.sql').toString();
    const data = await db.query(sql);
    res.send(data.rows);
})

module.exports = api;