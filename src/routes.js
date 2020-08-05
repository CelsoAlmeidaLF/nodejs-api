var express = require('express')
var router = express.Router()

router.use(express.json());

router.get("/", (req, res) => {

    return res.json({ titulo: "api project" });

 });

router.get("/view", (req, res) => {

    return res.json({ titulo: "exibe lista" });

 });

router.post("/add", (req, res) => {

    return res.json({ titulo: "cadastrar dados" });

 });

router.get("/view/:id", (req, res) => {

    return res.json({ titulo: "lista item" });

});

router.put("/edit/:id", (req, res) => {

    return res.json({ titulo: "edita item" });

});

router.delete("/delete/:id", (req,res) => {

    return res.json({ titulo: "deleta item" });

});


router.use(function(req, res, next) {
  res.status(404).redirect('/')
})

module.exports = router
