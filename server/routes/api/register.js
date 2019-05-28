const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

router.get('/', async (req, res) => {
    res.send("Hello from users");
});

router.post('/', async (req, res) => {

    req.checkBody('username', 'Username field cannot be empty.').notEmpty();
    req.checkBody('email', 'The email you entered is invalid, please try again').isEmail();
    req.checkBody('userTypeId', 'User Type field cannot be empty.').notEmpty();
    req.checkBody('groupId', 'Group field cannot be empty.').notEmpty();


    const errors = req.validationErrors();

    if (errors) {
        res.send('register', {
            title: 'Registration Error',
            errors: errors
        });
    }
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const birthDate = req.body.birthDate;
    const userTypeId = req.body.userTypeId;
    const groupId = req.body.groupId;

    client.connect();
    await client.query('INSERT into users (username, email, password, birth_date, user_type_id, group_id) VALUES($1, $2, $3, $4, $5, $6)', 
        [username, email, password, birthDate, userTypeId, groupId]);

    res.send(process.env.DATABASE_URL);

});


module.exports = router;