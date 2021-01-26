import React from 'react';
import ReactDOM from 'react-dom';

class Body extends React.Component {
	render() {
		return (
			<div className="container-fluid mt-5 bg-light">
				<div className="container-fluid mt-2">
					<h1 className="text-center">My Skills..</h1>
					<br/>
					<section className="skill-bars">
		
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
							<h1>My skills</h1>
							<p className="lead">
								<ul className="ul">
									<li>HTML</li>
									<li>CSS</li>
									<li>Javscript</li>
									<li>Bootstrap</li>
									<li>Jquery</li>
									<li>PHP</li>
									<li>Angular 8</li>
									<li>React</li>
									<li>Vue/cli </li>
									<li>MYSQL</li>
									<li>Socket.io</li>
									<li>Adobe Photoshop</li>
									<li>e.t.c</li>
								</ul> 
							</p>	
						</div>
					</div>
					
					<div className="row">
												
						<div className="col-md-6 col-sm-12">
							<div className="skills-right ">
								<h3>Developing</h3>
								<ul className="container shadow-lg p-5">
									<li>
										<span>HTML &amp; CSS3</span>
										<div className="progress">
											<div style={{width:'99%'}} className="progress-bar  progress-bar-striped progress-bar-animated"></div>
										</div>
									</li>
									<li>
										<span>vue/cli</span>
										<div className="progress">
											<div style={{width:'75%'}} className="progress-bar  progress-bar-striped progress-bar-animated"></div>
										</div>
									</li>
									<li>
										<span>Javascript / Jquery</span>
										<div className="progress">
											<div style={{width:'90%'}} className="progress-bar  progress-bar-striped progress-bar-animated"></div>
										</div>
									</li>
									<li>
										<span>Angular 8</span>
										<div className="progress">
											<div style={{width:'85%'}} className="progress-bar  progress-bar-striped progress-bar-animated"></div>
										</div>
									</li>
									<li>
										<span>PHP &amp; MySQL</span>
										<div className="progress">
											<div style={{width:'95%'}} className="progress-bar  progress-bar-striped progress-bar-animated"></div>
										</div>
									</li>
									<li>
										<span>Nodejs</span>
										<div className="progress">
											<div style={{width:'90%'}} className="progress-bar  progress-bar-striped progress-bar-animated"></div>
										</div>
									</li>
									<li>
										<span>C++</span>
										<div className="progress">
											<div style={{width:'70%'}} className="progress-bar  progress-bar-striped progress-bar-animated"></div>
										</div>
									</li>
									<li>
										<span>WordPress</span>
										<div className="progress">
											<div style={{width:'90%'}} className="progress-bar progress-bar-striped progress-bar-animated"></div>
										</div>
									</li>									
									
									<li>
										<span>React</span>
										<div className="progress">
											<div style={{width:'90%'}} className="progress-bar progress-bar-striped progress-bar-animated"></div>
										</div>
									</li>
									
								</ul>
							</div>
						</div>
					</div>
					
		
				</div>
			</section>
				</div>
				<section className="timeline-1 mt-5">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
							<h1>Here is a little of my story</h1>
							<p className="lead">
								My name is Thomas Peter am a web developer and i live in Nigeria, i always practice and develop more and more on every programming language am  involved in such as Html, css, javascript, php, angular8, vue/cli, React, Node.js, Socket.io, Adobe Photoshop and more. Programming aspect is what i like most and have passion on, also it is an aspect in technology that is most important... 
							</p>	
						</div>
					</div>
					
					<div className="row">
						<div className="col-sm-12">
							<div className="timeline-event p-3">
								<div className="col-sm-6 col-md-push-6">
									<h3>2019 till Now</h3>
									<h5>Student web developer <br/></h5>
								</div>
								
								<div className="middle">
									<i className="icon icon-map"></i>
									<div className="vertical-line"></div>
								</div>
								
								<div className="col-sm-6 col-md-pull-6">
									<p>
										<ul>
											<li className="p-2 m-2">Time to time improvement of speed and performance of all projects through daily optimization of codes, issues debugging and application of best programming practices.</li>
											<li className="p-2 m-2">Implementing good and awesome designs and excellent User Experience to all my projects.</li>
											<li className="p-2 m-2">Maintenance of my web Portfolio to improve users experience.</li>
												<b><i>Technologies Used:</i></b> &nbsp; &nbsp; JavaScript, ReactJs, Angular/cli, HTML, CSS, Bootstrap, Laravel, Jquery.

										</ul>	
									</p>
								</div>
								
								
							</div>
							<div className="timeline-event float-right p-3">
								<div className="col-sm-6 col-md-push-6">
									<h3>November 2019 to December 2019</h3>
									<h5>Working as a Back-end web Developer<br/></h5>
								</div>
								
								<div className="middle">
									<i className="icon icon-map"></i>
									<div className="vertical-line"></div>
								</div>
								
								<div className="col-sm-6 col-md-pull-6">
									<p>
									<li className="m-2 p-2">•	Increased the projects speed and performance and issues debugging and application of best programming practices.</li>
									<li className="p-2 m-2">•	Making the functionalities of the site with the data storage to the backend and redesigning the front-end.</li>
									<li className="m-2 p-2">•	Communicating with the Database using Ajax and php.</li>
									<b><i>Technologies Used:</i></b> &nbsp; &nbsp; JavaScript, HTML, CSS, Bootstrap, PHP, Ajax, Jquery.
									Link to project <a href="www.github.com/PetersGlory/Trimma"></a>

									</p>
								</div>
								
								
							</div>
						</div>
					</div>
					
		
				</div>
			</section>
			</div>
			)
	}
}
export default Body;