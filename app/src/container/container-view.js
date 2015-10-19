'use strict';

var Backbone = require('backbone');
var AbstractView = require('../abstract-view');
var ContainerComponent = require('./container-component');

/**
 * Application container view
 */
var ConainerView = AbstractView.extend({
    component: function () {
        return new ContainerComponent({
            router: this.options.router
        });
    },

    /**
     * Renders page with specified view
     * @param view
     */
    pageRender: function (view) {
        this.$('#main-container').html(view.render().$el);
    }
});

module.exports = ConainerView;
