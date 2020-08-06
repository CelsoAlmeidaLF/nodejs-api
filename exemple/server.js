const express = require('express');
const app = express();
const data = require("./data.json");
const port = 8000

app.use(express.json())

// GET => RETORNA CLIENTES
app.get("/clients",(req, res) => {
    res.json(data)
 })

// GET => RETORNA CLIENTE PELO ID
app.get("/clients/:id",(req, res) => {
    const { id } = req.params
    const client = data.find(cli => cli.id = id);
    if(!client) return res.status(404).json()
    res.json(client)
 })

// POST => CADASTRA NOVO CLIENTE
app.post("/clients",(req, res) => {
    const { name, email } = req.body
    res.json({name, email});
 })

// PUT => ATUALIZA CLIENTE
app.put("/clients/:id",(req, res) => {
    const { id } = req.params
    const client = data.find(cli => cli.id = id)
    if(!client) return res.status(404).json()
    const { name } = req.body
    client.name = name
    res.json(client)
 })

// DELETE => DELETA CLIENTE
app.delete("/clients/:id",(req, res) => {
    const { id } = req.params
    const clientsFiltered = data.filter(cli => cli.id != id)
    res.json(clientsFiltered)
 })

app.listen(port,()=>{ console.log("server is running")})
