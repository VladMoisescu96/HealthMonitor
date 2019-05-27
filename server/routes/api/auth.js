const express = require('express');

const router = express.Router();

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

router.get('/', async (req, res) => {
    res.send("Hello from users");
});

router.post('/', async (req, res) => {

    cient.query(
        'INSERT into users (username, email, password) VALUES($1, $2, $3) RETURNING id', 
        [req.body.username, req.body.email, req.body.password]);
});


module.exports = router;