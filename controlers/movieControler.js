// Alle Funktionen, die mit den CatRoutes zu tun haben

const Movie_Item = require('../models/movies.js')
const appName = 'MMDB'

const movie_add_get = (req, res) => {
    res.render('addMovie', { myPageTitle: `${appName}|ADD MOVIE` })
}
const movie_add_post = (req, res) => {
    console.log('something posted')
    console.log(req.body)
    // const Movie = new Movie_Item(req.body)
    const Movie = new Movie_Item({
        title: req.body.title,
        year: req.body.year,
        director: req.body.director,
        duration: req.body.duration,
        genre: req.body.genre,
        rate: req.body.rate,
        movieposter: req.body.movieposter,
        description: req.body.description
    })
    Movie.save()
        .then(result => {
            console.log('movie added to db')
            console.log(result)
            res.redirect('/addMovie')
        })
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
const movie_add_favorite = (req, res) => {
    console.log(req.params.id)
    const currentMovie = Movie_Item.where({ _id: req.params.id });
    console.log(currentMovie)
    currentMovie.update({ $set: { isFavorite: true } }).exec()
    console.log('movie added as favorite')
    res.redirect('/favorites')
    //     .then((result) => {
    //         console.log('movie added as favorite')
    //         console.log(result)
    //         res.render('movieDetail', { myPageTitle: `${appName}|MOVIE DETAIL`, movieFound: currentMovie })
    //     })
    //     .catch((err) => {
    //         res.send(err)
    //         console.log(err)
    //     })

}
const movie_remove_favorite = (req, res) => {
    console.log(req.params.id)
    const currentMovie = Movie_Item.where({ _id: req.params.id });
    console.log(currentMovie)
    currentMovie.update({ $set: { isFavorite: false } }).exec()
    console.log('movie removed from favorite')
    res.redirect('/favorites')
    //     .then((result) => {
    //         console.log('movie added as favorite')
    //         console.log(result)
    //         res.render('movieDetail', { myPageTitle: `${appName}|MOVIE DETAIL`, movieFound: currentMovie })
    //     })
    //     .catch((err) => {
    //         res.send(err)
    //         console.log(err)
    //     })

}
const movie_edit_get = (req, res) => {
    console.log(req.params.id)
    Movie_Item.findById(req.params.id)
        .then((result) => {
            console.log(result)
            res.render('editMovie', { myPageTitle: `${appName}|EDIT MOVIE`, currentMovie: result })
        })
        .catch((err) => {
            res.send(err)
            console.log(err)
        })

}
const movie_edit_post = (req, res) => {
    console.log('new edit request sent')
    const Movie = Movie_Item.findByIdAndUpdate(req.params.id, req.body)
        .then(result => {
            console.log('movie added to db')
            console.log(result)
            // res.redirect('/')
            res.render(`movieDetail`, { myPageTitle: `${appName}|MOVIE DETAIL`, movieFound: result })
        })
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
    movie_add_post,
    movie_detail_get,
    movie_add_favorite,
    movie_remove_favorite,
    movie_edit_get,
    movie_edit_post
}