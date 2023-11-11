const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const port = 3000; 

// Middleware para analizar datos JSON
app.use(bodyParser.json());

// Ruta de inicio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Rutas para inicio de sesion
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    //se verifica la autenticación

    if(username === "admin" && password ==="1234"){
        res.status(200).json({ message: 'Autenticación satisfactoria' });
    } 
    else {
        res.status(401).json({ message: 'Error en la autenticación' });
    }
});

// aca se inicia el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
