import { token } from "morgan";
import app from "./app.js";
import jwt, { verify } from "jsonwebtoken";

app.listen(app.get('port'));
console.log("listener in the port", app.get('port'));



app.get('/', (req, res) => {
    res.send('welcome to my Api Jc4milo © Developer 2023 <hr> Rutas <hr> <li>/api <li>/api/products <li>/api/client <li>/api/brand <li>/api/category <li>/api/work/workers <li>/api/sales <li>/api/deparment <li>/api/order <li>/api/user <li>/api/municipality ');
})


app.post('/api/login', (req, res) => { 
    const user = req.body
    jwt.sign({ user }, 'secretKey', { expiresIn: '82200s' }, (error, token) => {
        if (error) {
            res.status(500).json({ mensaje: 'Error al generar el token' });
        } else {
            res.json({ token });
        } 
    }); 
}); 

 

