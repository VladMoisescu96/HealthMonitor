const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/', function(req, res){
    req.logout();
    console.log("logged out")
    return res.send();
});

module.exports = router;