const express = require('express');
const { Client } = require('pg');

const router = express.Router();

router.get('/', async (req, res) => {
    res.send("Hello from users");
});

router.post('/', async (req, res) => {
    const users = await loadUsers();

    await users.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [req.body.username, req.body.email, req.body.password]);
    users.end();
    res.send(users);
});

async function loadUsers() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: true,
    });
      
    client.connect();
    
    return client;
}


module.exports = router;