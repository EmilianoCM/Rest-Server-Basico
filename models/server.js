
const express = require('express')
const cors = require('cors')

class Servidor {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares (Funciones que se ejecutan cuando se levanta el servidor)
        this.middlewares();

        //Rutas de mi APLICACION    
        this.routes();
    }

    middlewares(){
        
        //CORS
        this.app.use( cors() );

        //Parseo y Lectura del Body
        this.app.use( express.json() );  
              
        //Directorio Publico
        this.app.use( express.static('public') );

    }

    routes(){
        //middlewares condicional
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

    
}

module.exports = Servidor;