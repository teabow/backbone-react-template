'use strict';

var AbstractView = require('../abstract-view');
var ContainerComponent = require('./container-component');
var React = require('react');

/**
 * Application container view
 */
var ContainerView = AbstractView.extend({

    component: function () {
        return <ContainerComponent router={this.options.router} />;
    },

    /**
     * Renders page with specified view
     * @param view
     */
    pageRender: function (view) {
        this.$('#main-container').html(view.render().$el);
    }
});

module.exports = ContainerView;
