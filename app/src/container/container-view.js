'use strict';

var AbstractView = require('../abstract-view');
var ContainerComponent = require('./container-component');
var React = require('react');

/**
 * Application container view
 */
var ContainerView = AbstractView.extend({

    viewId: 'main-container',

    component: function () {
        return <ContainerComponent router={this.options.router} viewId={this.viewId}/>;
    },

    /**
     * Renders page with specified view
     * @param view
     */
    pageRender: function (view) {
        this.render({component: view.component(), el: this.viewId});
    }
});

module.exports = ContainerView;
