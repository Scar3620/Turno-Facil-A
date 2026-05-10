const express = require("express");
const cors = require("cors");
const connection = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor de Turno Fácil funcionando");
});

app.get("/usuarios",(req, res) => {
    const sql = "SELECT * FROM usuarios";
    connection.query(sql,(error,resultados) => {
        if(error){
            console.log(error);
            return res.status(500).json({
                mensaje: "Error al obtener usuarios"
            });
        }
        res.json({
            mensaje: "Lista de usuarios",
            usuarios: resultados
        });
    });
});

app.post("/usuarios",(req,res) => {
    const { nombre, correo, telefono } = req.body;
    const sql = `
    insert into usuarios(nombre, correo, telefono)
    VALUES (?, ?, ?)
    `;

    connection.query(
        sql,
        [nombre, correo, telefono],
        (error, resultado) => {
            if(error){
                console.log(error);
                return res.status(500).json({
                    mensaje: "error al crear usuario"
                });
            }
            res.json({
                mensaje: "usuario creado correctamente",
                id: resultado.insertId
            });
        }
    );
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});