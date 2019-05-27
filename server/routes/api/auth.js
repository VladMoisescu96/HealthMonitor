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

    //var connectionString = "postgres://fmvczwhersemte:46ab7ff9cca6264621ce1a69f3658ae12691027d8838c4a82c20f8801313a3f9@ec2-46-137-187-23.eu-west-1.compute.amazonaws.com:5432/d78tcc2bsd8nkq"

    client.connect();
    client.query('INSERT into users (username, email, password) VALUES($1, $2, $3) RETURNING id', 
    [req.body.username, req.body.email, req.body.password]);

    res.send(process.env.DATABASE_URL);

});


module.exports = router;