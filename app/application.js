
import {ServerExpress} from '../server/index.js'

export class Application {
    constructor(){
        console.clear();
        let server = new ServerExpress();
        server.openServer();
    }
}