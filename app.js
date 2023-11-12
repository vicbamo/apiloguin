
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const port = 3000; 
const usuarios = {
    'admin': '1234',
};
// Middleware para analizar datos JSON
app.use(bodyParser.json());

// Ruta de inicio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Rutas para inicio de sesion
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log('Solicitud de inicio de sesión recibida. Usuario:', username, 'Contraseña:', password);
    
    //se verifica la autenticación

    if(usuarios[username] && usuarios[username] ==='1234'){
        console.log('Autenticación exitosa');
        res.status(200).json({ message: 'Autenticación satisfactoria' });
    } 
    else {
        console.log('Error en la autenticación');
        res.status(401).json({ message: 'Error en la autenticación' });
    }
});

// aca se inicia el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
