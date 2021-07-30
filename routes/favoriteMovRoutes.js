const express = require('express')
// Großbuchstabe!
const router = express.Router()

const favoritesControlers = require('../controlers/favoritesControler')
console.log(favoritesControlers)

// app wird durch Router ersetzt
// das /cats wird von unserem server durch app.use('/cats', catRoutes) vorausgesetzt
// da wir das /cats schon aus dem Server bekommen hier nur / !!!
router.get('/favorites', favoritesControlers.favorite_get)



module.exports = router