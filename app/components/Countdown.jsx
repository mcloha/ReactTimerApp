var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
    render: function () {
        return (
            <div>
                <h3>I am a Countdown component</h3>
                <Clock/>
            </div>
        )
    }
});

module.exports = Countdown;