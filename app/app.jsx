// var React = require('react');
// var ReactDOM = require('react-dom');
// var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//  same as
// 	var Router = require('react-router').Route;
 

//  var Main = require('Main');


// ReactDOM.render(
// 	<Router history={hashHistory}>
// 		<Route path='/' component={Main}>	

// 		</Route>
// 	</Router>,
//   document.getElementById('app')
// );

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
);
