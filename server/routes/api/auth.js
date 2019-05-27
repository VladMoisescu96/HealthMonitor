const express = require('express');

const router = express.Router();

const { Client } = require('pg');

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true,
// });

//client.connect();

router.get('/', async (req, res) => {
    res.send("Hello from users");
});

router.post('/', async (req, res) => {

    Client.connect(process.env.DATABASE_URL, function(err, client, done) {
        console.log(err+"!!!!!!!!!!!!!!!");
       client.query('SELECT * FROM your_table', function(err, result) {
         done();
         if(err) return console.error(err);
         console.log(result.rows);
       });
     });
});


module.exports = router;