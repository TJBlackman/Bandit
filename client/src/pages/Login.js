import React, { Fragment } from "react";
import Bandit from "../images/bandit.png";

const Login = () => {
	return (
		<Fragment>
			<header style={{ backgroundImage: "none" }}>
				<img id="header-logo" src={Bandit} alt="" />
			</header>

			<div className="form-container">
				<h1>Account Login</h1>
				<form>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input type="email" name="email" required />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" required />
					</div>
					<input type="submit" value="Login" className="btn" />
				</form>
			</div>
		</Fragment>
	);
};

export default Login;
