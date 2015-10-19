/** @jsx React.DOM */
var React = require('react');
var Backbone = require('backbone');
var ReactBackbone = require('react.backbone');

var MovieBlock = React.createBackboneClass({
    render: function () {
        var movie = this.props.movie;
        var title = movie.get('title');
        var id = movie.get('id');

        return (
            <div className="movie-block" onClick={this.selectMovie}>
                <h2>{title}</h2>
            </div>
        );
    },

    selectMovie: function () {
        console.log(this.props.movie.id);
        Backbone.history.navigate('movies/' + this.props.movie.id, {trigger: true});
    }
});

module.exports = MovieBlock;