const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');
const engines = require('consolidate');
const Handlebars = require('handlebars');
const fs = require('fs');
const fetch = require('node-fetch')
const path = require('path');

const app = express();


var serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://common--classes.firebaseio.com/"
});


app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '/public')))


app.get('/', (req, res) => {
    res.render('index')
})

app.use(function (req, res, next){
    res.status(404).render('404')
})


app.listen(process.env.PORT || 8080, () => {
    console.log(`Listening on Port ${process.env.PORT || 8080}`)
})

// app.get('/cached', (request, response) => {
//     response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
//     response.render('index', {data: {
//         author: 'SERDAR AGLAMIS'
//     }})
// });

exports.app = functions.https.onRequest(app);
