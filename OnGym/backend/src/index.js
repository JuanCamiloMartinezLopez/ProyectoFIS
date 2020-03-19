const express = require('express');
const path = require('path');
const cors = require('cors');



//inicializaciones
const app = express();
require('./database');

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(express.json());
app.use(cors());

//variables gobales

//routes
app.use('/OnGym-api', require('./routes/index.js'));
app.use('/OnGym-api', require('./routes/autentificacion.js'));
app.use('/OnGym-api', require('./routes/atleta.js'));
app.use('/OnGym-api', require('./routes/entrenador.js'));
app.use('/OnGym-api', require('./routes/rutina.js'));
app.use('/OnGym-api', require('./routes/ejericio.js'));
app.use('/links', require('./routes/links.js'));

//public
app.use(express.static(path.join(__dirname, 'public')));

//starting
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})