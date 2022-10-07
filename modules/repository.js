
import {Data} from '../data/database.js'

export class Repository {

    getall(){
        let db = new Data();
        return db.getall('sql', undefined);
    }

    get(){
        let db = new Data();
        return db.get('sql', undefined);
    }

    set(){
        let db = new Data();
        db.run('sql', undefined);
    }

    up(){
        let db = new Data();
        db.run('sql', undefined);
    }

    del(){
        let db = new Data();
        db.run('sql', undefined);
    }

}