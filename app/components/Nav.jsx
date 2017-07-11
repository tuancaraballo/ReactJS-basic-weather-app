var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

	onSearch: function(e) {
		e.preventDefault();
		alert('not yet wired up');
	},

	render: function () {
	  return (
		<nav className="navbar navbar-default">
  			<div className="container-fluid">
    			
    			<div className="navbar-header">
      				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        				<span className="sr-only">Toggle navigation</span>
        				<span className="icon-bar"></span>
        				<span className="icon-bar"></span>
        				<span className="icon-bar"></span>
      				</button>
      				
      				<div className="navbar-brand"> <Link to='/'> React Weather App </Link> </div>   
    			</div>

    			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      				<ul className="nav navbar-nav">
        				<li className="active"> 
        					<IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get Weather 
        						<span className="sr-only">(current)</span>
        					</IndexLink>
        				</li>
        				
        				<li>
        					<Link to='/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About </Link>
        				</li>
        			
        				<li>
        					<Link to='/example' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Example </Link>
        				</li>
      				</ul>
      	
      				<form className="navbar-form navbar-right" onSubmit={this.onSearch}>
        				<div className="form-group">
          					<input type="text" className="form-control" placeholder="Search"/>
        				</div>
        				<button type="submit" className="btn btn-primary">Get Weather</button>
      				</form>
    			</div>
    		</div>
		</nav>
	);
	}
});
	

module.exports = Nav;

// <a className="navbar-brand" href="#">Brand</a>
// var old = (
// 		<div>
// 			<h3> Navigation Component </h3>
// 			<IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get Weather </IndexLink>
// 			<Link to='/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About </Link>
// 			<Link to='/example' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Example </Link>
// 		</div>
// 	);



//-----
// <ul className="nav nav-tabs">
//   			<li role="presentation" className="active"><a href="#">Home</a></li>
//   			<li role="presentation"><a href="#">Profile</a></li>
//   			<li role="presentation"><a href="#">Messages</a></li>
// 		</ul>

// 		<nav className="navbar navbar-default">
//   <div className="container-fluid">
//     <!-- Brand and toggle get grouped for better mobile display -->
//     <div className="navbar-header">
//       <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
//         <span className="sr-only">Toggle navigation</span>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//       </button>
//       <div className="navbar-brand"> <Link to='/'> About </Link> </div>   
//     </div>

//     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//       <ul className="nav navbar-nav">
//         <li className="active"> 
//         	<IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get Weather 
//         			<span className="sr-only">(current)</span>
//         	</IndexLink>
//         </li>
//         <li>
//         	<Link to='/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About </Link>
//         </li>
//         <li>
//         	<Link to='/example' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Example </Link>
//         </li>
//       </ul>
//       <form className="navbar-form navbar-left">
//         <div className="form-group">
//           <input type="text" className="form-control" placeholder="Search">
//         </div>
//         <button type="submit" className="btn btn-default">Submit</button>
//       </form>
//     </div>
//   </div>
// </nav>