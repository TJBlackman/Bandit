import React, { Fragment, useEffect } from "react";

import Header from "../layout/Header";
import About from "../layout/About";
import Services from "../layout/Services";
import Benefits from "../layout/Benefits";
import CoreValues from "../layout/CoreValues";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";

const Home = () => {
	useEffect(() => {
		const sectionObserver = new IntersectionObserver(
			(entries, observer) => {
				const [entry] = entries;

				if (!entry.isIntersecting) return;

				entry.target.classList.remove("section-hidden");

				//stop observing after loading the whole page
				observer.unobserve(entry.target);
			},
			{
				root: null,
				threshold: 0.15,
			}
		);

		document.querySelectorAll(".section").forEach(function (section) {
			sectionObserver.observe(section);
			section.classList.add("section-hidden");
		});
	});

	return (
		<Fragment>
			<Header />
			<About />
			<Services />
			<Benefits />
			<CoreValues />
			<Contact />
			<Footer />
		</Fragment>
	);
};

export default Home;
