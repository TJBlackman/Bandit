import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<div className="container">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
					</Switch>
				</div>
			</Fragment>
		</Router>
	);
}

export default App;
