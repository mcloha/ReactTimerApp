var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
    render: function () {
        return (
            <div>
                <h3>I am a Timer component</h3>
                <Clock/>
            </div>
        );
    }
});

module.exports = Timer;