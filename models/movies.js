const Joi= require('@hapi/joi');
const mongoose= require('mongoose');
const {genreSchema}= require('./genres');

const movieSchema= new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 255
    },
    genre: {
        type: genreSchema,
        required: true
    },
    numberInStock: {
        type: Number,
        required: true,
        min:0,
        max:50
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min:0,
        max:50
    }
});

const Movie= mongoose.model("Movie", movieSchema);

function validateMovies(movie){
    const schema= {
        title: Joi.string().min(5).max(50).required(),
        genreId: Joi.objectId().required(),
        numberInStock: Joi.number().min(0).required(),
        dailyRentalRate: Joi.number.min(0).required()
    };
    return Joi.validate(movie, schema);
}

exports.Movie= Movie;
exports.validate= validateMovies;   