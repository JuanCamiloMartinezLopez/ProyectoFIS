const express = require('express');
const router = express.Router();
const user = require('../models/user.js');

const pool = require('../database')
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.send('home')
})

router.post('/login', async(req, res) => {
    const { correo, contraseña, type } = req.body;
    const newUser = {
        correo,
        contraseña
    }
    console.log(newUser)
    const result = pool.query('SELECT * FROM ' + type + ' WHERE correo=? and contraseña=?', [correo, contraseña]);
    if (!result) return res.status(401).send("el usuario no existe");
    const token = jwt.sign({ _id: result.id }, 'secret');
    res.status(200).json({ token });
})

router.post('/registroEntrenador', async(req, res) => {
    const { nombres, primerapellido, segundoapellido, correo, contraseña } = req.body;
    let newEntrenador = {
        nombres,
        primerapellido,
        segundoapellido,
        correo,
        contraseña
    }
    const result = await pool.query('INSERT INTO entrenador set ?', newEntrenador);
    newEntrenador.id = result.insertId;
    console.log(newEntrenador);
    const token = jwt.sign({ _id: newEntrenador.id }, 'secret');
    res.status(200).json({ token });

})

router.post('/resgistroAtleta', (req, res) => {

})

module.exports = router;