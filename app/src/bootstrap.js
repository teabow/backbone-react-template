'use strict';

var Backbone = require('backbone');
var Router = require('./router');
var ContainerView = require('./container/container-view');
var MoviesController = require('./movies/movies-controller');
Backbone.$ = $;

/**
 * Application class
 */
class Application {

    constructor() {
        this.initialize();
    }

    /**
     * Application initialization method
     */
    initialize() {
        this.controllers = {
            movies: new MoviesController({ app: this })
        };

        this.router = new Router({
            controllers: this.controllers
        });

        this.containerView = new ContainerView({
            el: $('#app'),
            router: this.router
        });

        this.showApp();
    }

    /**
     * Shows application container view
     */
    showApp() {
        this.containerView.render();
        Backbone.history.start(/*{ pushState: true }*/);
    }

}

module.exports = {
    Application: Application
};
