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
			errorMessage: undefined,
			location: undefined,
			temp: undefined,
		});

		openWeatherMap.getTemp(location).then(function (temp){
			that.setState({  //-> 'this' get lost here 
				location: location,
				temp: temp,
				isLoading: false,
			});
		}, function(e) {
				that.setState({
					isLoading:false,
					errorMessage: e.toString(),
				});
		});
	},
	//--> it fires when the component has been mounted succesfully
	// the Router gives you access to the query parameters
	componentDidMount: function () {
		// --> This last part query.location is what changes depending on what you're looking in the query
		//     it could also be query.name
		var location = this.props.location.query.location;

		if(location && location.length > 0){
			this.handleSearch(location);
			window.location.hash = '#/';  // -->
		}
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
				<h1 className="page-title text-center"> Get Weather </h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderErrorMessage()}
			</div>
		);
	}
});

module.exports = Weather;