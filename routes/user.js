

const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../json.js') 
const { signIn, signUp } = require('../controlers/user.js')
const router = express.Router()


router.post('/signup', signUp);
router.post('/signin', signIn);



module.exports = router;

