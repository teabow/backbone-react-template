'use strict';

var MoviesCollection = require('./movies-collection');
var MovieModel = require('../movie/movie-model');
var LocalStorageService = require('../storage/local-storage-service');

var MoviesListView = require('./movies-list-view');
var MovieDetailsView = require('../movie/movie-details-view');

var MoviesController = function(options) {

    var app = options.app;

    return {

        moviesCollection: new MoviesCollection(),

        list: function() {

            var self = this;
            self.moviesCollection.fetch().done(function() {
                LocalStorageService.save(LocalStorageService.KEYS.MOVIES, self.moviesCollection.toJSON());
                var moviesListView = new MoviesListView({
                    movies: self.moviesCollection
                });
                app.containerView.pageRender(moviesListView);
            });
        },

        show: function(id) {

            var self = this;
            var movies = (self.moviesCollection.models.length > 0) ?
                self.moviesCollection :
                new MoviesCollection(LocalStorageService.load(LocalStorageService.KEYS.MOVIES));
            var movie = movies.findWhere({id: id});

            var movieDetailsView = new MovieDetailsView({
                movie: movie
            });
            app.containerView.pageRender(movieDetailsView);

        }
    };
};

module.exports = MoviesController;
