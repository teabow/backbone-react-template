var AbstractView = require('../abstract-view');
var MovieDetailsComponent = require('./movie-details-component');

var MovieDetailsView = AbstractView.extend({
    component: function () {
        return new MovieDetailsComponent({
            movie: this.options.movie
        });
    }
});

module.exports = MovieDetailsView;
