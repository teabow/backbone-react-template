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
                <h2>Title : {title} ({year})</h2>
                <h2>Release date : {releaseDates.theater}</h2>
            </div>
        );
    }
});

module.exports = MovieDetails;
