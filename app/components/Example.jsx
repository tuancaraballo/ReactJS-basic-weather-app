var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
	return (
		<div>
		<h1 className="text-center">Example Component</h1>
		<p> Here are a few example locations to try out: </p>
		<ol>
			<li>	
				<Link to='/?location=Philadelphia'> Gresham, OR </Link>
			</li>
			<li>	
				<Link to='/?location=Havana'> Havana, Cuba </Link>
			</li>
			<li>	
				<Link to='/?location=Palo Alto'> Palo Alto, CA </Link>
			</li>
		</ol>
		</div>
	);
}

module.exports = Example;