const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello from users");
});

router.post('/', (req, res) => {
    //res.send("Hello");
});


module.exports = router;