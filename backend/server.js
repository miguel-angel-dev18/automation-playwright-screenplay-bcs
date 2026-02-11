const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static('../frontend')); // Cambia '../frontend' por la carpeta donde tengas tus HTML

// Permitir llamadas desde el frontend local (CORS)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// -------- ENDPOINTS --------

 //ENDPOINT REGISTRO
app.post("/registro", (req, res) => {
  res.json({ mensaje: "Registro exitoso" });
});

//ENDPOINT LOGIN
app.post("/login", (req, res) => {
  const { user, pass } = req.body;

  if (user === "admin" && pass === "1234")
     {
    res.json({ mensaje: "Bienvenido" });
  } else {
    res.status(401).json({ mensaje: "Credenciales inválidas" });
  }
});

//ENDPOINT SIMULADOR
app.post("/simular", (req, res) => {
  const { monto } = req.body;

  if (monto === "0") {
    res.status(400).json({ error: "Monto inválido" });
  } else {
    res.json({ ganancia: "12.000 COP" });
  }
});

// Levantar servidor
app.listen(3000, () => {
  console.log("Backend corriendo en http://localhost:3000");
});
