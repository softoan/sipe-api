
/*
Comando para iniciar o generar un package json
*/
npm init --yes
/*
*Me interpreta los datos que recibe mi url a json
*/
npm i body-parser

/* 
* express: es un framework de node que sirve para escribir
 mucho codigo de servidor resumido. es el mas popular
 * ejs: es un motor de plantilla para mejorar el html como lo que se hace en php, 
 mezclar el codigo con html
 * morgan: sirve para ver por consola lo que los navegadores piden. imagenes etc...
 */
npm i express ejs morgan

/*Asi se ejecuta el proyecto*/
npm run "nombre de la direccion puesta en package.json"

/*
* nodemon 
* -D: Significa sera instalado como una dependencia de desarrollo
* Este comando me sirve para ver los cambios que realice en tiempo real como en angular cuando guardo.
*/
npm i nodemon -D


/*
* Para la conexion a la base de datos necesitamos instalar 
*/
npm i mysql2
npm i body-parser

/*
*Sirve para enviar mensajes hacia la pantalla y eliminarlos a refrescar la pag.
*/
npm i connect-flash

/*
* Sesion
*/

npm i express-session



/*
* Conexion a oracle
*/
npm i cors
npm i oracledb




/*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*..*.*.*.*.*.*/

Subir app a Heroku