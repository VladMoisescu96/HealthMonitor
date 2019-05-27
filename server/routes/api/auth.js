const express = require('express');
const { Client } = require('pg');

const router = express.Router();

router.get('/', async (req, res) => {
    res.send("Hello from users");
});

router.post('/', async (req, res) => {

    Client.connect(process.env.DATABASE_URL, function(err, client, done) {
        console.log(err+"!!!!!!!!!!!!!!!");
        client.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [req.body.username, req.body.email, req.body.password], function(err, result) {
            done();
            if(err) return console.error(err);
            console.log(result.rows);
        });
    });
    //res.send("POST!");
});

async function loadUsers() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: true,
    });
      
    client.connect();

    client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
        if (err) throw err;
        for (let row of res.rows) {
          console.log(JSON.stringify(row));
        }

    });

    client.end();
    //return client;
}


module.exports = router;