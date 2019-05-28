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
    client.query('INSERT into BODY_HEIGHT (height, date, user_id) VALUES($1, $2, $3) RETURNING id', 
    [req.body.height, new Date(), req.body.userId]);

    res.send(process.env.DATABASE_URL);
});




module.exports = router;