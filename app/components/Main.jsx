var React = require('react');
var Nav = require('Nav');

// the this.props.children renders below any component you want, 
// below the navbar, but you can put it whereever you want
var Main = React.createClass({
	render: function () {
		return (
			<div>
				<Nav/>
				<h2> Main Component </h2>
				{this.props.children} 
			</div>	
		);
	}
});

module.exports = Main;