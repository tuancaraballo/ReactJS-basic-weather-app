var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherInfo = require('WeatherInfo');

var Weather = React.createClass( {
	getInitialState: function () {
		return {
			location: 'Miami',
			temp: 88
		}
	},
	handleSearch: function(location) {
		this.setState({
			location: location,
			temp: 23
		});
	},
	render: function () {
		var {location, temp} = this.state;
		return (
			<div>
				<h1> Get Weather </h1>
				<WeatherForm onSearch={this.handleSearch}/>
				<WeatherInfo location={location} temp={temp}/>
			</div>
		);
	}
});

module.exports = Weather;