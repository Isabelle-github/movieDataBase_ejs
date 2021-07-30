// Alle Funktionen, die mit den CatRoutes zu tun haben

const Movie_Item = require('../models/movies.js')
const appName = 'MMDB'
const movie_add_get = (req, res) => {
    res.render('addMovie', { myPageTitle: `${appName}|ADD MOVIE` })
}
const movie_add_post = (req, res) => {
    console.log(req.body)
    const Movie = new Movie_Item(req.body)
    Movie.save()
        .then(result => res.redirect('/'))
        .catch(err => {
            console.log(err)
            res.end()
        })
}

module.exports = {
    // key: etwas
    // etwas: etwas
    // etwas

    movie_add_get,
    movie_add_post
}