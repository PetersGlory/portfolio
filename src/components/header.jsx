import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar shadow-lg bg-primary navbar-dark navbar-expand-md sticky-top">
					<a className="navbar-brand" href="/">Peter's Portfolio</a>

				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				  	<div className="collapse navbar-collapse" id="collapsibleNavbar">
				    <ul className="navbar-nav ml-auto">
				      <li className="nav-item">
				        <a className="nav-link" href="#">Home</a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#">Contact Me</a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#">Hire Me</a>
				      </li>
				    </ul>
				  </div>
				</nav>
				<header className="header-icons ">
					<div className="background-image-holder parallax-background">
						<img className="background-image" alt="Background Image" src="https://www.5gbfree.com/wp-content/uploads/2018/01/5gbfree-support.jpg"/>
					</div>
					
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<h3 className="text-white">
									Hello, I'm Thomas Peter.<br/>I am a Developer&nbsp;<span> and i can develop Websites and Web Applications </span>&nbsp; for you.
								</h3>
							</div>
						</div>
						
						<div className="row">
							<div className="col-sm-4">
								<i className="icon icon-desktop text-white"></i>
								<h2 className="text-white">Web Design</h2>
							</div>
							
							<div className="col-sm-4">
								<i className="icon text-white icon-phone"></i>
								<h2 className="text-white">Mobile Design</h2>
							</div>
							
							<div className="col-sm-4">
								<i className="icon text-white icon-strategy"></i>
								<h2 className="text-white">Desktop App</h2>
							</div>
						</div>
		
					</div>	
				</header>
			</div>
			)
	}
}
export default Header;