import React from 'react';
import './App.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

class App extends React.Component {
	sta
	render() {
   return (
		<React.Fragment>
			<div className="bg-primary">
				<Header />
				<Body />
				<Footer />
			</div>
		</React.Fragment>
   )
  }
}

export default App;
