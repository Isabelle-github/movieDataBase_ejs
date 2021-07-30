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
const movie_detail_get = (req, res) => {
    console.log(req.params.id)
    Movie_Item.findById(req.params.id)
        .then((result) => {
            console.log(result)
            res.render('movieDetail', { myPageTitle: `${appName}|MOVIE DETAIL`, movieFound: result })
        })
        .catch((err) => {
            res.send(err)
            console.log(err)
        })

}

module.exports = {
    // key: etwas
    // etwas: etwas
    // etwas

    movie_add_get,
    movie_add_post,
    movie_detail_get
}