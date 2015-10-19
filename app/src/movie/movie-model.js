'use strict';

var Backbone = require('backbone');

/**
 * Movie model
 */
var Movie = Backbone.Model.extend({
    defaults: {
        title:  ''
    }
});

module.exports = Movie;
