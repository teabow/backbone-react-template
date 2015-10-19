'use strict';

var BackboneRouteControl = require('backbone-route-control');

/**
 * Router of the application
 */
var Router = BackboneRouteControl.extend({
    /**
     * Defines routes here
     */
    routes: {
        '':           'movies#list',
        'movies':     'movies#list',
        'movies/:id': 'movies#show'
    }
});

module.exports = Router;
