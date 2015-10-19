'use strict';

var Backbone = require('backbone');
var Movie = require('../movie/movie-model');

/**
 * Movies collection
 */
var MoviesCollection = Backbone.Collection.extend({

    model: Movie,

    url: 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json',

    parse: function(response) {
        return response.movies;
    }

});

module.exports = MoviesCollection;
