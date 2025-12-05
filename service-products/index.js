const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://mongo:27017/productsdb")
  .then(() => console.log("Products Service: conectado ao MongoDB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json({ message: "Serviço de Produtos funcionando!" });
});

app.listen(3002, () => console.log("Products Service rodando na porta 3002"));
