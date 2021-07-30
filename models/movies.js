const mongoose = require('mongoose')
const Schema = mongoose.Schema

// {
//     title: 'The Shawshank Redemption',
//     year: '1994',
//     director: 'Frank Darabont',
//     duration: '2h 22min',
//     genre: ['Crime', 'Drama'],
//     rate: '9.3',
//     movieposter: "https://m.media-amazon.com/images/I/51zUbui+gbL.jpg",
//     description: 'The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption. It tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence. Over the following two decades, he befriends a fellow prisoner, contraband smuggler Ellis "Red" Redding (Morgan Freeman), and becomes instrumental in a money-laundering operation led by the prison warden Samuel Norton (Bob Gunton). William Sadler, Clancy Brown, Gil Bellows, and James Whitmore appear in supporting roles.'
// }

// const genreSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     }
// })
const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    genre: {
        type: [String],
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    movieposter: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

// mongoose wandelt den String in Kleinbuchstaben um!!!!
const Movie_Item = mongoose.model('movie_item', movieSchema)

module.exports = Movie_Item