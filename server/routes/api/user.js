const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get("/", authMiddleware, (req, res) => {  
  
    res.send({ user: 7 })
  });

  const authMiddleware = (req, res, next) => {  
    if (!req.isAuthenticated()) {
      res.status(401).send('You are not authenticated')
    } else {
      return next()
    }
  }

  module.exports = router;