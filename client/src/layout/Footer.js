import React, { useEffect } from "react";

const Footer = () => {
	useEffect(() => {
		document.getElementById("date-year").innerHTML = new Date().getFullYear();
	});

	return (
		<div>
			<footer>
				<a href="downloads" className="download-google">
					<img
						src="images/googlePlayDownload.svg"
						alt="Download from the Google Play Store"
					/>
				</a>
				<a href="downloads" className="download-apple">
					<img
						src="images/appleDownload.svg"
						alt="Download from the Apple Store"
					/>
				</a>

				<p id="footer-text">
					&copy; <span id="date-year"></span> All Rights Reserved.
				</p>
			</footer>
		</div>
	);
};

export default Footer;
