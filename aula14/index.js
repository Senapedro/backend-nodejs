const express = require("express");
const empresa = require("./router/empresa.router");
const app = express();

const port = 3000;

app.use(express.json()); 

app.use("/empresa",empresa);

app.get("/", (req,res) => {
    res.send("Hello Word");
})

app.get("/contato", (req,res) => {
    res.send("Nosso Contato");
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});