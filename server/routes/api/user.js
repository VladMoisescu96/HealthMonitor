const express = require('express');
const passport = require('passport');

app.get("/", authMiddleware, (req, res) => {  
    let user = users.find(user => {
      return user.id === req.session.passport.user
    })
  
    console.log([user, req.session])
  
    res.send({ user: user })
  })

  const authMiddleware = (req, res, next) => {  
    if (!req.isAuthenticated()) {
      res.status(401).send('You are not authenticated')
    } else {
      return next()
    }
  }