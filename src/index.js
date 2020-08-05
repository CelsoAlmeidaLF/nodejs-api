const express = require('express');
const app = express();
const routes = require('./routes')
const port = 8000;

//app.use(express.json());

// app.get("/", (req, res) => { return res.json({ titulo: "api project" }); });
// app.get("/view", (req, res) => { return res.json({ titulo: "exibe lista" }); });
// app.post("/add", (req, res) => { return res.json({ titulo: "exibe lista" }); });
// app.get("/view/:id", (req, res) => { return res.json({ titulo: "exibe lista" }); });
// app.put("/edit/:id", (req, res) => { return res.json({ titulo: "exibe lista" }); });
// app.delete("/delete/:id", (req,res) => { return res.json({ titulo: "exibe lista" }); });

// rotas
app.use('/api', routes);

app.use(function(req, res, next) {
  res.status(404).redirect('/api')
})

app.listen(port,() => { console.log("server api on: %d", port) });
