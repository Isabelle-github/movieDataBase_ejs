// Alle Funktionen, die mit den CatRoutes zu tun haben

const Movie_Item = require('../models/movies.js')
const appName = 'MMDB'
const favorite_get = (req, res) => {
    res.render('favorites', { myPageTitle: `${appName}|FAVORITE MOVIES` })
}


module.exports = {
    // key: etwas
    // etwas: etwas
    // etwas

    favorite_get
}