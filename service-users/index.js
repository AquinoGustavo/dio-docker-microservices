const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://mongo:27017/usersdb")
  .then(() => console.log("Users Service: conectado ao MongoDB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json({ message: "Serviço de Usuários funcionando!" });
});

app.listen(3001, () => console.log("Users Service rodando na porta 3001"));
