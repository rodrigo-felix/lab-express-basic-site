const express = require('express');
const app = express();

app.use(express.static('public'));

//#1 - home route
app.get('/home', (request, response, next) => 
response.sendFile(__dirname + '/views/index.html'));

//#2 - about route
app.get('/sobre', (request, response, next) => 
response.sendFile(__dirname + '/views/home-about.html'));

//#3 - achievement route
app.get('/conquistas', (request, response, next) => 
response.sendFile(__dirname + '/views/home-achievement.html'));

//#4 - route route
app.get('/galeria', (request, response, next) => 
response.sendFile(__dirname + '/views/home-gallery.html'));

app.listen(3000, () => {
    console.log("Servidor ouvindo na porta 3000")
});