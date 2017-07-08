var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherInfo = require('WeatherInfo');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass( {
	getInitialState: function () {
		return {
			isLoading: false
		}
	},
	handleSearch: function(location) {
		var that = this; // =-> this data binding gets lost where setState is called, this is why we save it here
		this.setState({isLoading: true});

		openWeatherMap.getTemp(location).then(function (temp){
			that.setState({  //-> 'this' get lost here 
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function(errorMessage) {
				that.setState({isLoading:false})
				alert(errorMessage);
		});
	},
	render: function () {
		var {isLoading, location, temp} = this.state;

		function renderMessage () {
			if(isLoading){
				return <h3> Fetching weather ... </h3>;
			}else if(temp && location){	
				return <WeatherInfo location={location} temp={temp}/>;
			}
		}

		return (
			<div>
				<h1> Get Weather </h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;