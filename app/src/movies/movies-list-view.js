'use strict';

var AbstractView = require('../abstract-view');
var MoviesListComponent = require('./movies-list-component');
var React = require('react');

var MoviesListView = AbstractView.extend({

    component: function () {
        return <MoviesListComponent movies={this.options.movies}/>
    }

});

module.exports = MoviesListView;
