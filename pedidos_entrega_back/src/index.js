import app from "./app.js";

app.listen(app.get('port'));

console.log("listener in the port", app.get('port'));

app.get('/', (req, res) =>{
    res.send('welcome to my Api Jc4milo © Developer 2023');
})