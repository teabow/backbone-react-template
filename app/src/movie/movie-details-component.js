'use strict';

var React = require('react');
var ReactBackbone = require('react.backbone');

var MovieDetails = React.createBackboneClass({
    render: function () {
        var movie = this.props.movie;
        var posters = movie.get('posters');
        var title = movie.get('title');
        var ratings = movie.get('ratings');
        var releaseDates = movie.get('release_dates');
        var year = movie.get('year');

        return (
            <div className="movie-details">
                <h1>{title} ({year})</h1>
                <img src={posters.thumbnail}  alt="thumbnail"/>
                <div>Release date : {releaseDates.theater}</div>
                <div>Rating : {ratings.critics_score} ({ratings.critics_rating})</div>
            </div>
        );
    }
});

module.exports = MovieDetails;
