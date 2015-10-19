var Backbone = require('backbone');
var AbstractView = require('../abstract-view');
var MainComponent = require('./main-component');

/**
 * Application main view
 */
var MainView = AbstractView.extend({
    component: function () {
        return new MainComponent({
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

module.exports = MainView;
