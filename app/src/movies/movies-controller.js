'use strict';

var MoviesCollection = require('./movies-collection');
var MovieModel = require('../movie/movie-model');

var MoviesListView = require('./movies-list-view');
var MovieDetailsView = require('../movie/movie-details-view');

var MoviesController = function(options) {

    var app = options.app;

    return {

        moviesCollection: new MoviesCollection(),

        list: function() {

            var self = this;
            self.moviesCollection.fetch().done(function() {
                var moviesListView = new MoviesListView({
                    movies: self.moviesCollection
                });
                app.containerView.pageRender(moviesListView);
            });
        },

        show: function(id) {

            var self = this;
            var movie = self.moviesCollection.findWhere({id: id});

            var movieDetailsView = new MovieDetailsView({
                movie: movie
            });
            app.containerView.pageRender(movieDetailsView);

        }
    };
};

module.exports = MoviesController;
