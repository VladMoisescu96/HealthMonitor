const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { Client } = require('pg');

const saltRound = 10;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

router.get('/', async (req, res) => {
    res.send("Hello from users");
});

router.post('/', async (req, res) => {

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const birthDate = req.body.birthDate;
    const userTypeId = req.body.userTypeId;
    const groupId = req.body.groupId;

    client.connect();

    bcrypt.hash(password, saltRound, function(err, hash) {
        
        await client.query('INSERT into users (username, email, password, birth_date, user_type_id, group_id) VALUES($1, $2, $3, $4, $5, $6)', 
            [username, email, hash, birthDate, userTypeId, groupId]);

        res.send(process.env.DATABASE_URL);
    });

});


module.exports = router;