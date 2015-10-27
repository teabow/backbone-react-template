'use strict';

var Backbone = require('backbone');
var ReactDOM = require('react-dom');

/**
 * Application abstract view
 */
var AbstractView = Backbone.View.extend({
    initialize: function (options) {
        this.options = options || {};
    },

    component: function () {
        return null;
    },

    render: function (opts) {
        ReactDOM.render((opts && opts.component) ? opts.component : this.component(),
            (opts && opts.el) ? document.getElementById(opts.el) : this.el);
        return this;
    }
});

module.exports = AbstractView;
