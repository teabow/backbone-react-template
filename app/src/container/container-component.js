'use strict';

var React = require('react');
var ReactBackbone = require('react.backbone');

var ContainerComponent = React.createBackboneClass({
    render: function () {
        return (
            <div>
                <div id="main-container" className="container">Loading...</div>
            </div>
        );
    }
});

module.exports = ContainerComponent;
