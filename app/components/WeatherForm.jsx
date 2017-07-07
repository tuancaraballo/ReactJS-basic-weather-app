var React = require('react');

var WeatherForm = React.createClass( {
	onFormSubmit: function (e) {
		e.preventDefault();// this prevents the browse from refreshing the app.

		var city = this.refs.city.value; 

		if (city.length > 0) {
			this.refs.city.value = ''; // ---> Notice here how setting this to '' works kinda by reference
			this.props.onSearch(city);
		}

	}, 
	render: function () {
		return (
		 <div>
		   <form onSubmit={this.onFormSubmit}>
				<div>
					<input type='text' ref='city' placeholder='Enter city name'/> 
				</div>
				<div>
					<button> Get Weather </button>
				</div>
			</form>
		 </div>
		)
	}
});

module.exports = WeatherForm;