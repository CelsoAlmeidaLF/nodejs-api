
import {Business} from '../../app/application.js'

export class ControllerHome {

    constructor(){
        this.bll = new Business();
    }

    cadastro (req, res) {
            const { id, title, content } = req.body
            
            let db = new sqlite3.Database(dbname, err => {
                if (err){ throw err } console.log("Database start on: " + dbname) });
            
            db.serialize(() => {
            
                db.run('INSERT INTO blog(id, title, content) VALUES( $id, $title, $content )', {
                $id:id, $title:title, $content:content });
            
                db.all('SELECT * FROM blog',(err, data) => {
                if (err){ throw err }  
                return res.json(data);

             });

            db.close(err => { if (err){ throw err } 

            console.log("closed: " + dbname) });
          });
    }

    consulta (req, res) {
        let db = new sqlite3.Database(dbname, err => {

            if (err){ throw err } console.log("Database start on: " + dbname) });
            db.serialize(() => {
                db.all('SELECT * FROM blog',(err, data) => {
                    if (err){ throw err } return res.json(data) 
                });
                db.close(err => { if (err){ throw err } console.log("closed: " + dbname) });
        });
    }

    consultaById (req, res) {
        const { id } = req.params
        let db = new sqlite3.Database(dbname, err => {
        if (err){ throw err } console.log("Database start on: " + dbname) });
        db.serialize(() => {

            db.all('SELECT * FROM blog WHERE id = ?',[id],(err, data) => {
                if (err){ throw err } return res.json(data) 
            });

            db.close(err => { if (err){ throw err } console.log("closed: " + dbname) });
        });
    }

    edit (req, res) {
            const { id } = req.params
            const { title, content } = req.body
            let db = new sqlite3.Database(dbname, err => {
            if (err){ throw err } console.log("Database start on: " + dbname) });
            db.serialize(() => {
                db.run('UPDATE blog SET title = $title, content = $content  WHERE id = $id',{
                $id:id, $title:title, $content:content
            });
            db.all('SELECT * FROM blog WHERE id = ?',[id],(err, data) => {
                if (err){ throw err } return res.json(data) });
            db.close(err => { if (err){ throw err } console.log("closed: " + dbname) });
        });
    }

    delete (req, res) {
        const { id } = req.params
        let db = new sqlite3.Database(dbname, err => {
            if (err){ throw err } console.log("Database start on: " + dbname) });
            db.serialize(() => {
                db.run('DELETE FROM blog WHERE id = ?', id );
                db.all('SELECT * FROM blog',(err, data) => {
                    if (err){ throw err } return res.json(data) 
                });
            db.close(err => { if (err){ throw err } console.log("closed: " + dbname) });
        });
    }

}