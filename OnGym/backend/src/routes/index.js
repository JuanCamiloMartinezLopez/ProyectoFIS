const express = require('express');
const router = express.Router();
const user = require('../models/user.js');

const pool = require('../database')

router.get('/', (req, res) => {
    res.send('home')
})

router.post('/login', async(req, res) => {
    const { email, password, type } = req.body;
    const newUser = {
        email,
        password
    }
    console.log(newUser)
    pool.query('SELECT * FROM ? WHERE email=?', [type, email]);
    res.send('si puto');
})

router.post('/resgistroEntrenador', (req, res) => {

})

router.post('/resgistroAtleta', (req, res) => {

})

module.exports = router;