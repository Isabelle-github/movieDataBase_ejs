require('dotenv').config()
console.log('hi')

const express = require('express')
const app = new express()
const mongoose = require('mongoose')
const PORT = process.env.PORT
// const dataArticle = require('./data.json')
const random = Math.floor(Math.random() * (13 - 0 + 1) + 0)
app.use(express.json()) // Um die Daten in json Format umzuwandeln
app.use(express.urlencoded({ extended: true }))
const appName = 'MMDB'
const currentDay = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
const fileSyst = require('fs')
// ...rest of the initial code omitted for simplicity.
// const { body, validationResult } = require('express-validator');
// const nodemail = require('nodemailer')
const fetch = require('node-fetch');
const Movie_Item = require('./models/movies.js')
const movieRoutes = require('./routes/movieRoutes')
const favoriteMovRoutes = require('./routes/favoriteMovRoutes')

app.use(express.static('public'))
app.set('view engine', 'ejs')
console.log(process.env.DB_URI)

app.get('/', (req, res) => {
    res.render('index', { myPageTitle: `${appName}|HOME` })
})
// app.get('/addMovie', (req, res) => {
//     res.render('addMovie', { myPageTitle: `${appName}|HOME` })
// })
// app.post('/addMovie', (req, res) => {
//     console.log(req.body)
//     const Movie = new Movie_Item(req.body)
//     Movie.save()
//         .then(result => res.redirect('/'))
//         .catch(err => console.log(err))
// })

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log('connected to db')
        app.listen(PORT, () => { console.log(`http://localhost:${PORT}`) })
    })
    .catch((err) => {
        console.log(err)
    })

app.use('/', movieRoutes)
app.use('/', favoriteMovRoutes)
