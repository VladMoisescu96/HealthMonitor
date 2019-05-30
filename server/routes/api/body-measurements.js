const express = require("express");

const router = express.Router();

const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

router.get("/", async (req, res) => {
  res.send("Hello from users");
});

router.post("/", async (req, res) => {
  client.connect();

  client.query("SELECT * FROM users WHERE username = $1", [req.body.username], function(err, result) {
      
    if (err) {
        res.send(err);
    }

      if (result.rows[0] == null) {
        res.statusCode(404).send("User not found");
      }

      client.query(
        "INSERT into BODY_HEIGHT (height, date, user_id) VALUES($1, $2, $3)", [req.body.height, new Date(), result.rows[0].username]);
    }
  );

  res.send(process.env.DATABASE_URL);
});

module.exports = router;
