var mongoose = require('mongoose');
var movieSchema = require('../schemas/movie');
var movieModel = new mongoose.model('movieModel', movieSchema);

module.exports = movieModel;
