import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch,withRouter } from 'react-router-dom';

import Home from './pages/Home';
import Properties from './pages/Properties';
import Brokers from './pages/Brokers';
import Favorites from './pages/Favorites';

import CoreLayout from './shared/layouts/CoreLayout';

import { routerPath, pageTitle } from './constants';



class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<CoreLayout>
						<Switch>
							<Route exact component={() => <Home title={pageTitle.home} />} path="/" />
							<Route exact component={() => <Home title={pageTitle.home} />} path="/home" />
							<Route
								exact
								component={() => <Properties title={pageTitle.properties} />}
								path={routerPath.properties}
							/>
							<Route
								exact
								component={() => <Brokers title={pageTitle.brokers} />}
								path={routerPath.brokers}
							/>
							<Route
								exact
								component={() => <Favorites title={pageTitle.favorites} />}
								path={routerPath.favorites}
							/>
						</Switch>
					</CoreLayout>
				</Router>
			</div>
		);
	}
}

export default App;
