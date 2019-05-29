const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/', async (req, res) => {
    res.send("Hello from users");
});

router.post("/", (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            res.send(err);
            return next(err);
        }
        
        if (!user) {
            return res.status(400).send([user, "Cannot log in", info])
        }

        req.login(user, (err) => {
            res.send("Logged in")
        })
    })(req, res, next);


})



module.exports = router;