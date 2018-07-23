var React = require('react');
var ReactDOM = require('react-dom');
var {  Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');
var Counter = require('app/components/Counter.jsx');
var Timer = require('app/components/Timer.jsx');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/counter" component={Counter}/>
      <Route path="/timer" component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
