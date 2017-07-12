var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherInfo = require('WeatherInfo');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass( {
	getInitialState: function () {
		return {
			isLoading: false
		}
	},
	handleSearch: function(location) {
		
		var that = this; // =-> this data binding gets lost where setState is called, this is why we save it here
		
		this.setState({
			isLoading: true,
			errorMessage: undefined
		});

		openWeatherMap.getTemp(location).then(function (temp){
			that.setState({  //-> 'this' get lost here 
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function(e) {
				that.setState({
					isLoading:false,
					errorMessage: e.toString(),
				});
		});
	},
	render: function () {
		var {isLoading, location, temp, errorMessage} = this.state;

		function renderMessage () {
			if(isLoading){
				return <h3> Fetching weather ... </h3>;
			}else if(temp && location){	
				return <WeatherInfo location={location} temp={temp}/>;
			}
		}
		function renderErrorMessage() {
			if(typeof errorMessage === 'string'){
				return (
					<ErrorModal message={errorMessage}/>
				);
			}
		} 

		return (
			<div>
				<h1> Get Weather </h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderErrorMessage()}
			</div>
		);
	}
});

module.exports = Weather;