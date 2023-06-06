// Κληση της express και handlebars για τη δημιουργία του application
// Η handlebars διαχειρίζεται τις σελίδες html και τις συνδέει μεταξύ τους
const express = require('express');
const app = express(); //κλώνος της express
const {engine} = require('express-handlebars');
const path = require('path')

// Setup Handlebars as engine
app.use(express.static(path.join(__dirname + '/public') ) );
app.engine('handlebars',engine({defaultLayout:'main',layoutsDir:'views/layouts'}));
app.set('views', __dirname + '/views');
app.set('view engine','handlebars');

//Routes
app.get(
    '/',(req,res)=>{
        res.render('index',{title:'Home',js:'from.js'})
});

app.listen(8080,()=>{
        console.log('Server is running on port 8080');
        console.log('http://localhost:8080/');
});