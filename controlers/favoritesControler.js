// Alle Funktionen, die mit den CatRoutes zu tun haben

const Movie_Item = require('../models/movies.js')
const appName = 'MMDB'
// const favorite_get = (req, res) => {
//     res.render('favorites', { myPageTitle: `${appName}|FAVORITE MOVIES` })
// }
const movie_favorites_get = (req, res) => {
    Movie_Item.find({ isFavorite: true })
        .then(result => {
            // console.log(result)
            res.render('favorites', { myPageTitle: `${appName}|HOME`, movieData: result })
        })
        .catch(err => console.log(err))

}


module.exports = {
    // key: etwas
    // etwas: etwas
    // etwas

    // favorite_get,
    movie_favorites_get
}