var React = require('react');
var Nav = require('Nav');

// the this.props.children renders below any component you want, 
// below the navbar, but you can put it whereever you want

var Main = (props) => {
	return (
		<div>			
			<Nav/>

			<div className="container-fluid">
  				<div className="row">
  					<div className="col-md-6 col-lg-4 col-md-offset-3 col-lg-offset-4"> 
  						{props.children} 
  					</div>
 				</div>	
			</div>

		</div>	
	);
}

module.exports = Main;