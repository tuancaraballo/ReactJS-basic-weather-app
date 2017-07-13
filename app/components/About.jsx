var React = require('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About Component </h1>
			<p> This is a basic weather application I have built to learn ReactJS</p>
			<p> Check out my  <a href="https://github.com/tuancaraballo/ReactJS-basic-weather-app">github repo </a> if you want to see the code </p>
			<p> Some resources and apis I used include </p>
			<ol>
				<li>
					<a href="https://facebook.github.io/react/"> ReactJS framework </a>
				</li>
				<li>
					<a href="https://openweathermap.org/"> Open Weather Map </a>
				</li>
			</ol>
		</div>
	);
}

module.exports = About;