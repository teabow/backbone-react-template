/** @jsx React.DOM */
var React = require('react');
var ReactBackbone = require('react.backbone');
var MovieBlock = require('../movie/movie-block-component');

var MoviesListComponent = React.createBackboneClass({
    mixins: [
        React.BackboneMixin('movies', 'change')
    ],

    render: function() {
        var moviesBlocks = this.props.movies.map(function(movie) {
            return <MovieBlock movie={movie} />
        });

        return (
            <div className="movies-container">
                <h1>Movies</h1>
                {moviesBlocks}
            </div>
        );
    }
});

module.exports = MoviesListComponent;
