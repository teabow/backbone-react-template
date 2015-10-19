'use strict';

/** @jsx React.DOM */
var React = require('react');
var Backbone = require('backbone');
var ReactBackbone = require('react.backbone');

var MovieDetails = React.createBackboneClass({
    render: function () {
        var movie = this.props.movie;
        var title = movie.get('title');
        var releaseDates = movie.get('release_dates');
        var year = movie.get('year');

        return (
            <div className="movie-details">
                <h1>{title} ({year})</h1>
                <div>Release date : {releaseDates.theater}</div>
            </div>
        );
    }
});

module.exports = MovieDetails;
