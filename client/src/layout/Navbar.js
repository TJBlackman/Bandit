import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router";
import Logo from "../images/logo.png";

const toggleNav = () => {
	document.querySelector("nav").classList.toggle("active");
};

const loginLinks = (
	<Fragment>
		<ul className="page-nav">
			<li className="nav-item" onClick={toggleNav}>
				<Link to="/">Home</Link>
			</li>
			<li className="nav-item">
				<Link to="/login" onClick={toggleNav}>
					Login
				</Link>
			</li>
		</ul>
	</Fragment>
);

const homeLinks = (
	<Fragment>
		<ul className="nav-items">
			<li className="nav-item">
				<a className="nav-link" href="#home">
					Home
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#about">
					About Us
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#services">
					Services
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#how-it-works">
					How It Works
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#benefits">
					Benefits
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#core_values">
					Core Values
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#contact">
					Contact Us
				</a>
			</li>
		</ul>
		<ul className="page-nav">
			<li className="nav-item">
				<Link to="/login" onClick={toggleNav}>
					Login
				</Link>
			</li>
		</ul>
	</Fragment>
);

const changeNav = () => {
	if (window.location.pathname === "/") {
		return homeLinks;
	}
	if (window.location.pathname === "/login") {
		return loginLinks;
	}
};

let navMenu = changeNav();

const Navbar = ({ icon }) => {
	// const history = useHistory();
	return (
		<Fragment>
			<nav>
				<button className="closeBtn" id="lines" aria-label="menu button">
					<div className="line line1"></div>
					<div className="line line2"></div>
					<div className="line line3"></div>
				</button>
				{icon}
				{navMenu}
			</nav>
		</Fragment>
	);
};

Navbar.propTypes = {
	loginLinks: PropTypes.array,
	homeLinks: PropTypes.array,
	icon: PropTypes.string,
};

Navbar.defaultProps = {
	icon: <img src={Logo} alt="" />,
};

export default Navbar;
