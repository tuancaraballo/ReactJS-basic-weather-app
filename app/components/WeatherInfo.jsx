var React = require('react');

var WeatherInfo = ({temp, location} ) => { //--> notice how we are destructuring here
	return (
		<div>
			<h3> It is {temp} in {location}</h3>
		</div>
	);
}

module.exports = WeatherInfo;