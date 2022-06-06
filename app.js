require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT


//HBS
app.set('view engine', 'hbs');

const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

//GET STATIC CONTENT

app.use(express.static('public'));



app.get('/', (req, res) => {
    res.render('home', {
        nombre: "James Tellez",
        titulo: "Drastyc"
    });
})
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: "James Tellez",
        titulo: "Elements"
    });
})
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: "James Tellez",
        titulo: "Generic"
    });
})

app.get('*', (req, res) => {
    res.render('404', {
        nombre: "James Tellez",
        titulo: "Drastyc"
    });
})


app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})