

const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../json.js') 
const { signIn, signUp, addUser } = require('../controlers/user.js')
const router = express.Router()


router.post('/signup', signUp);
router.post('/signin', signIn);
router.put('/add/:id',addUser);


module.exports = router;

