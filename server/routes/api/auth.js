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

    //var connectionString = "postgres://fmvczwhersemte:46ab7ff9cca6264621ce1a69f3658ae12691027d8838c4a82c20f8801313a3f9@ec2-46-137-187-23.eu-west-1.compute.amazonaws.com:5432/d78tcc2bsd8nkq"

    Client.connect(process.env.DATABASE_URL, function(err, client, done) {
        console.log(err+"!!!!!!!!!!!!!!!");
       client.query('SELECT * FROM users', function(err, result) {
         done();
         if(err) return console.error(err);
         console.log(result.rows);
       });
     });

    //res.send(process.env.DATABASE_URL);

});


module.exports = router;