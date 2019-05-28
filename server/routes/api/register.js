const express = require('express');

const router = express.Router();

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

router.get('/', async (req, res) => {
    res.send("Hello from users");
});

router.post('/', async (req, res) => {

    client.connect();
    client.query('INSERT into users (username, email, password) VALUES($1, $2, $3) RETURNING id', 
        [req.body.username, req.body.email, req.body.password]);

    client.end();
    res.send(process.env.DATABASE_URL);

});


module.exports = router;