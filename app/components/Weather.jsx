var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherInfo = require('WeatherInfo');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass( {
	getInitialState: function () {
		return {
			location: 'Miami',
			temp: 88
		}
	},
	handleSearch: function(location) {
		var that = this; // =-> this data binding gets lost where setState is called, this is why we save it here

		openWeatherMap.getTemp(location).then(function (temp){
			that.setState({  //-> 'this' get lost here 
				location: location,
				temp: temp
			});
		}, function(errorMessage) {
				alert(errorMessage);
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