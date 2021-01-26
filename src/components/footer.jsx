import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
	render() {
		return (
			<div className='container mt-3'>
				<div className="row">
					<div className="col shadow-lg">
						<ul className="navbar-nav text-center">
					      <li className="nav-item">
					        <a className="nav-link text-white" href="#">Home</a>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link text-white" href="#">Contact Me</a>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link text-white" href="#">Hire Me</a>
					      </li>
					    </ul>
					</div>
					<div className="col shadow-lg">
						<ul className="navbar-nav text-center ml-auto">
					      <li className="nav-item">
					        <a className="nav-link text-white" href="#"><i className="fa fa-envelop-o"></i> Peterglo2200@gmail.com</a>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link text-white" href="#">Contact Me</a>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link text-white" href="#">Hire Me</a>
					      </li>
					    </ul>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-12 text-center">
							<span className="text-white">© 2020 Thomas Peter - All Rights Reserved.</span>
							<br/>
							<br/>
							<i className="icon text-white icon_mail"></i>
							<a href="contact.html" className="text-white"><span className="text-white"> Get in touch with me <i className="icon arrow_right"></i></span></a>
						</div>
					</div>
				</div>
			</div>
			)
	}
}
export default Footer;