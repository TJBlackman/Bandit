import React, { Fragment, useRef } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/logo.png";

const Navbar = ({ icon }) => {
	const navRef = useRef();
	const location = useLocation();

	const toggleNav = () => {
		navRef.current.classList.toggle("active");
	};

	const goToSection = (e) => {
		if (e.target.classList.contains("nav-link")) {
			e.preventDefault();
			const id = e.target.getAttribute("href");

			document.querySelector(id).scrollIntoView({ behavior: "smooth" });
			toggleNav();
		}
	};

	const loginLinks = (
		<Fragment>
			<ul className="page-nav">
				<li className="nav-item" onClick={toggleNav}>
					<Link to="/">Home</Link>
				</li>
				<li className="nav-item" onClick={toggleNav}>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</Fragment>
	);

	const homeLinks = (
		<Fragment>
			<ul className="nav-items">
				<li className="nav-item" onClick={goToSection}>
					<a className="nav-link" href="#home">
						Home
					</a>
				</li>
				<li className="nav-item" onClick={goToSection}>
					<a className="nav-link" href="#about">
						About Us
					</a>
				</li>
				<li className="nav-item" onClick={goToSection}>
					<a className="nav-link" href="#services">
						Services
					</a>
				</li>
				<li className="nav-item" onClick={goToSection}>
					<a className="nav-link" href="#how-it-works">
						How It Works
					</a>
				</li>
				<li className="nav-item" onClick={goToSection}>
					<a className="nav-link" href="#benefits">
						Benefits
					</a>
				</li>
				<li className="nav-item" onClick={goToSection}>
					<a className="nav-link" href="#core_values">
						Core Values
					</a>
				</li>
				<li className="nav-item" onClick={goToSection}>
					<a className="nav-link" href="#contact">
						Contact Us
					</a>
				</li>
			</ul>
			<ul className="page-nav">
				<li className="nav-item" onClick={toggleNav}>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</Fragment>
	);

	const changeNav = () => {
		if (location.pathname === "/") {
			return homeLinks;
		}
		if (location.pathname === "/login") {
			return loginLinks;
		}
	};

	let navMenu = changeNav();

	return (
		<Fragment>
			<nav ref={navRef}>
				<button
					className="closeBtn"
					id="lines"
					aria-label="menu button"
					onClick={toggleNav}
				>
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
	icon: PropTypes.element.isRequired,
};

Navbar.defaultProps = {
	icon: <img src={Logo} alt="" />,
};

export default Navbar;
