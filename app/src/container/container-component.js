'use strict';

var React = require('react');
var ReactBackbone = require('react.backbone');

var ContainerComponent = React.createBackboneClass({
    render: function () {
        return (
            <div id={this.props.viewId} className="container">Loading...</div>
        );
    }
});

module.exports = ContainerComponent;
