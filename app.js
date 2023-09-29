const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido static se ejecuta antes que todo, por eso se despacha el index de la raiz.
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Saul',
        role: 'Developer',
        title: 'Engineer page'
    });
});

app.get('/hello', (req, res) => {
    res.send('Hello world!');
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Saul',
        role: 'Developer',
        title: 'Engineer page'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Saul',
        role: 'Developer',
        title: 'Engineer page'
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/`);
});