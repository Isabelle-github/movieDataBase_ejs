// Alle Funktionen, die mit den CatRoutes zu tun haben

const Movie_Item = require('../models/movies.js')
const appName = 'MMDB'
const favorite_get = (req, res) => {
    res.render('favorites', { myPageTitle: `${appName}|FAVORITE MOVIES` })
}

// const favorite_post = (req, res) => {
//     console.log('something posted')
//     console.log(req.body)
//     // const Movie = new Movie_Item(req.body)
//     const Movie = new Movie_Item({
//         title: req.body.title,
//         year: req.body.year,
//         director: req.body.director,
//         duration: req.body.duration,
//         genre: req.body.genre,
//         rate: req.body.rate,
//         movieposter: req.body.movieposter,
//         description: req.body.description
//     })
//     Movie.save()
//         .then(result => {
//             console.log('movie added to db')
//             console.log(result)
//             res.redirect('/addMovie')
//         })
//         .catch(err => {
//             console.log(err)
//             res.end()
//         })
// }

module.exports = {
    // key: etwas
    // etwas: etwas
    // etwas

    favorite_get,
    // favorite_post
}