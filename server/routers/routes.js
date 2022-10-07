var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3');
const { ControllerHome } = require('../controllers/home');
const dbname  = 'main.db';

router.use(express.json());

let home = ControllerHome();

// POST => adiciona novos dados no banco de dados
router.post("/add", home.cadastro);

// GET => retorna lista de dados
router.get("/view", home.consulta);

// GET/:id =. retorna item pelo seu id
router.get("/view/:id", home.consultaById);

// PUT/:id => edita item do banco de dados
router.put("/edit/:id", home.edit);

// DELETE/:id => apaga item do banco de dados
router.delete("/delete/:id", home.delete);

module.exports = router
