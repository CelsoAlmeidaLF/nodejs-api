var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3');
const dbname  = 'main.db';

router.use(express.json());

// POST => adiciona novos dados no banco de dados
// data: 07/08/2020 rev.1.0
router.post("/add", (req, res) => {
    const { id, title, content } = req.body
    let db = new sqlite3.Database(dbname, err => {
      if (err){ throw err } console.log("Database start on: " + dbname) });
    db.serialize(() => {
      db.run('INSERT INTO blog(id, title, content) VALUES( $id, $title, $content )',{
            $id:id,
            $title:title,
            $content:content
          });
      db.all('SELECT * FROM blog',(err, data) => {
          if (err){ throw err } return res.json(data) });
      db.close(err => { if (err){ throw err } console.log("closed: " + dbname) });
    });
});

// GET => retorna lista de dados
// data: 07/08/2020 rev.1.0
router.get("/view", (req, res) => {
    let db = new sqlite3.Database(dbname, err => {
      if (err){ throw err } console.log("Database start on: " + dbname) });
    db.serialize(() => {
        db.all('SELECT * FROM blog',(err, data) => {
          if (err){ throw err } return res.json(data) });
        db.close(err => { if (err){ throw err } console.log("closed: " + dbname) });
    });
 });

// GET/:id =. retorna item pelo seu id
// data: 07/08/2020 rev.1.0
router.get("/view/:id", (req, res) => {
  const { id } = req.params
  let db = new sqlite3.Database(dbname, err => {
    if (err){ throw err } console.log("Database start on: " + dbname) });
  db.serialize(() => {
    db.all('SELECT * FROM blog WHERE id = ?',[id],(err, data) => {
      if (err){ throw err } return res.json(data) });
    db.close(err => { if (err){ throw err } console.log("closed: " + dbname) });
  });
 });

// PUT/:id => edita item do banco de dados
// data: 07/08/2020 rev.1.0
router.put("/edit/:id", (req, res) => {
   const { id } = req.params
   const { title, content } = req.body
   let db = new sqlite3.Database(dbname, err => {
     if (err){ throw err } console.log("Database start on: " + dbname) });
   db.serialize(() => {
     db.run('UPDATE blog SET title = $title, content = $content  WHERE id = $id',{
           $id:id,
           $title:title,
           $content:content
         });
     db.all('SELECT * FROM blog WHERE id = ?',[id],(err, data) => {
         if (err){ throw err } return res.json(data) });
     db.close(err => { if (err){ throw err } console.log("closed: " + dbname) });
   });
  });

// DELETE/:id => apaga item do banco de dados
// data: 07/08/2020 rev.1.0
router.delete("/delete/:id", (req, res) => {
    const { id } = req.params
    let db = new sqlite3.Database(dbname, err => {
      if (err){ throw err } console.log("Database start on: " + dbname) });
    db.serialize(() => {
      db.run('DELETE FROM blog WHERE id = ?', id );
      db.all('SELECT * FROM blog',(err, data) => {
          if (err){ throw err } return res.json(data) });
      db.close(err => { if (err){ throw err } console.log("closed: " + dbname) });
    });
   });

// router.use(function(req, res, next) { res.status(404).redirect('/') })

module.exports = router
