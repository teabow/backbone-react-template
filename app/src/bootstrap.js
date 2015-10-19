var Backbone = require('backbone');
var Router = require('./router');
var MainView = require('./main/main-view');
var MoviesController = require('./movies/movies-controller');
Backbone.$ = $;

/**
 * Application class
 * @constructor
 */
var Application = function() {
    this.initialize();
};

/**
 * Application initialization method
 */
Application.prototype.initialize = function() {

    this.controllers = {
        movies: new MoviesController({ app: this })
    };

    this.router = new Router({
        app: this,
        controllers: this.controllers
    });

    this.mainView = new MainView({
        el: $('#app'),
        router: this.router
    });

    this.showApp();
};

/**
 * Shows application main view
 */
Application.prototype.showApp = function() {
    this.mainView.render();
    Backbone.history.start({ pushState: true });
};

module.exports = {Application: Application};
