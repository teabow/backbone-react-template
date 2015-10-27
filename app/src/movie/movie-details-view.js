'use strict';

var AbstractView = require('../abstract-view');
var MovieDetailsComponent = require('./movie-details-component');
var React = require('react');

var MovieDetailsView = AbstractView.extend({
    component: function () {
        return <MovieDetailsComponent movie={this.options.movie}/>
    }
});

module.exports = MovieDetailsView;
