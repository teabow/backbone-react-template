'use strict';

var AbstractView = require('../abstract-view');
var MoviesListComponent = require('./movies-list-component');

var MoviesListView = AbstractView.extend({
    component: function () {
        return new MoviesListComponent({
            movies: this.options.movies
        });
    }
});

module.exports = MoviesListView;
