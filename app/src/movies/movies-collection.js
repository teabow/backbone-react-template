'use strict';

var Backbone = require('backbone');
var Movie = require('../movie/movie-model');

let API_KEY = '7waqfqbprs7pajbz28mqf6vz';
let API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
let PAGE_SIZE = 25;
let PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;

/**
 * Movies collection
 */
var MoviesCollection = Backbone.Collection.extend({

    model: Movie,

    url: function() {
        //return API_URL + PARAMS;
        return 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
    },

    parse: function(response) {
        return response.movies;
    }

});

module.exports = MoviesCollection;
