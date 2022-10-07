const express = require('express');
const app = express();
const routes = require('./routes')
const port = 8000;

export class ServerExpress{

    middleware(){
        
    }

    routes(){
        app.use('/api', routes);
        app.use(function(req, res, next) { res.status(404).redirect('/api') })
    }

    openServer(){
        this.middleware();
        this.routes();
        
        app.listen(port,() => { console.log("server api on: http://localhost:%d", port) });
    }

}




