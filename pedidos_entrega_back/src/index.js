import { token } from "morgan";
import app from "./app.js";
import jwt, { verify } from "jsonwebtoken";

app.listen(app.get('port'));
console.log("listener in the port", app.get('port'));



app.get('/api', (req, res) => {
    res.send('welcome to my Api Jc4milo © Developer 2023');
})


app.post('/api/login', (req, res) => {
    const user = {
        name: "admin",
        correo: "admin@gmail.com",
        contraseña: "admin12345"
    };

    jwt.sign({ user }, 'secretKey', { expiresIn: '180s' }, (error, token) => {
        if (error) {
            res.status(500).json({ mensaje: 'Error al generar el token' });
        } else {
            res.json({ token });
        }
    });
});



// // Ruta POST protegida con JWT
// app.post('/api/posts', verifyToken, (req, res) => {
//     jwt.verify(req.token, 'secretKey', (error, authData) => {
//         if (error) {
//             res.status(403).json({ mensaje: error});
//         } else {
//             res.json({
//                 mensaje: "Post fue creado",
//                 authData
//             });
//         }
//     });
// });




// // Middleware para verificar el token

