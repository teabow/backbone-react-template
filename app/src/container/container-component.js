'use strict';

/** @jsx React.DOM */
var React = require('react');
var ReactBackbone = require('react.backbone');

var ContainerComponent = React.createBackboneClass({
    render: function () {
        return (
            <div>
                <div id="main-container" className="container"></div>
            </div>
        );
    }
});

module.exports = ContainerComponent;
