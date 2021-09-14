const express = require('express');
path = require('path');
morgan = require('morgan');

const app = express();

// manejo de las rutas
const landingPage = require('./routes/LandingPage');


// configuraciones de puerto
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// rutas de entrada
app.use('/', landingPage);



// indicando los archivos publicos del lado del cliente
app.use("/public",express.static(path.join(__dirname,'public')))

// inicializando el servidor
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});