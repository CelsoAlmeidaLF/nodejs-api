import express from 'express';
import router from './routers/routes.js'

const app = express();
const port = 8000;

export default class ServerExpress{

    middleware(){       
        app.use(express.json());
  }

    routes(){
        app.use('/api/v1', router);
        app.use(function(req, res, next) { res.status(404).redirect('/api/v1') })
    }

    openServer(){
        this.middleware();
        this.routes();
        
        app.listen(port,
            () => { console.log("server api on: http://localhost:%d", port) });
    }

}




