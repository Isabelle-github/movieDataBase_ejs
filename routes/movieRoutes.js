const express = require('express')
// Großbuchstabe!
const router = express.Router()

const movieControlers = require('../controlers/movieControler')
console.log(movieControlers)

// app wird durch Router ersetzt
// das /cats wird von unserem server durch app.use('/cats', catRoutes) vorausgesetzt
// da wir das /cats schon aus dem Server bekommen hier nur / !!!
router.get('/addMovie', movieControlers.movie_add_get)
router.post('/addMovie/send', movieControlers.movie_add_post)
router.get('/movieDetail/:id', movieControlers.movie_detail_get)
router.get('/movieDetail/:id/addFavorite', movieControlers.movie_add_favorite)
router.get('/movieDetail/:id/removeFavorite', movieControlers.movie_remove_favorite)
router.get('/movieDetail/:id/editMovie', movieControlers.movie_edit_get)
router.post('/movieDetail/:id/editMovie', movieControlers.movie_edit_post)


module.exports = router