const express = require('express');
const app = express();
const routes = require('./routes')
const port = 8000;

// INIT SERVER
app.use('/api', routes);
app.use(function(req, res, next) { res.status(404).redirect('/api') })

app.listen(port,() => { console.log("server api on: %d", port) });
