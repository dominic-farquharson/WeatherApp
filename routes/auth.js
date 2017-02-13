// importing express
const express = require('express');
// invoking router
const router = express.Router();

// register route
router.get('/register', (req,res,next)=>{
  res.send('register');
});

// login route
router.get('/login', (req,res,next) =>{
  res.send('login');
});

module.exports = router;
