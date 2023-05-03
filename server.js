const express = require("express");
const db = require("./db.js");
const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  db.then(async (db) => {
    console.log("base de datos conectada");
    const users = db.collection("users");
    const query = { age: 12 };
    const user = await users.findOne(query);
    res.json(user);
  });
});

app.listen(PORT, () => {
  console.log(`el servidor esta escuchando en http://localhost:${PORT}`);
});
