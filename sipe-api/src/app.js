const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const session = require('express-session'); 
const bodyParser = require('body-parser');

 
 


//Static
app.use(express.static('public'));

//Settings
app.set('port', 5000);
 

app.set('views', path.join(__dirname, 'app/views')); 
app.set('view engine', 'ejs');

//Middleware -->funciones que se ejecutan antes de llegar a la ruta
app.use(morgan('dev')); 
 
/*Permite recibir datos de form*/ 
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Routes
 app.use(require('./app/routes/main')); 


// 404 message error
app.use((req, res, next) => {
    res.status(404).send('<center><h1>404 Not found</h1></center>');
});
 
module.exports = app;