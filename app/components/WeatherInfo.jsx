var React = require('react');

var WeatherInfo = React.createClass({
	render: function() {
		var {temp, location} = this.props;
		return (
			<div>
				<h3> It is {temp} in {location}</h3>
			</div>
		);
	}
});


module.exports = WeatherInfo;