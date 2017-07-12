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
		   <form onSubmit={this.onFormSubmit}>
				<div className="form-group">
					<input type='text' ref='city' className="form-control" placeholder='Enter city name'/> 
				</div>
				 <button className="btn btn-primary ">Get Weather</button>
			</form>
		)
	}
});

module.exports = WeatherForm;