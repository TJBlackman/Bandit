import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
	const learnMore = () => {
		document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
	};
	return (
		<div>
			<header>
				<img id="header-logo" src="images/bandit.png" alt="" />
				<section id="home">
					<h1>{title}</h1>
					<button className="learn-more" onClick={learnMore}>
						Learn More{" "}
					</button>
				</section>
			</header>
		</div>
	);
};

Header.defaultProps = {
	title: "Your On-Demand Solution to Security Service Calls",
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
