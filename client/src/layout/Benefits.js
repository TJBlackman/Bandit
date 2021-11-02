import React, { useRef } from "react";

const Benefits = () => {
	const benefitsContainerRef = useRef();

	const toggleTab = (e) => {
		const clicked = e.target.closest(".benefits-tab");

		//guard clause
		if (!clicked) return;
		//active tab
		benefitsContainerRef.current
			.querySelectorAll(".benefits-tab")
			.forEach((t) => t.classList.remove("benefits-tab-active"));
		clicked.classList.add("benefits-tab-active");

		//Activate content area
		benefitsContainerRef.current
			.querySelectorAll(".benefits-content")
			.forEach((c) => c.classList.remove("benefits-content-active"));
		benefitsContainerRef.current
			.querySelector(`.benefits-content-${clicked.dataset.tab}`)
			.classList.add("benefits-content-active");
	};

	return (
		<div
			id="benefits"
			className="section-holder odd-section"
			ref={benefitsContainerRef}
		>
			<section className="section">
				<h2>Benefits</h2>
				<div className="benefits-tab-container">
					<button
						className="benefits-tab benefits-tab-1 benefits-tab-active"
						data-tab="1"
						onClick={toggleTab}
					>
						Partner/ Integrator
					</button>
					<button
						className="benefits-tab benefits-tab-2"
						data-tab="2"
						onClick={toggleTab}
					>
						Technicians
					</button>
					<button
						className="benefits-tab benefits-tab-3"
						data-tab="3"
						onClick={toggleTab}
					>
						Customer
					</button>
				</div>

				<div className="benefits-content benefits-content-1 benefits-content-active">
					<img
						className="partner-image benefit-image"
						src="images/partner-image.webp"
						alt="partner"
					/>

					<ul className="partner-benefits benefit-list">
						<li>Less expensive labor rates</li>
						<li>Frees up W2 employees for priority work</li>
						<li>Meets growing demand for immediate response times</li>
						<li>Higher customer satisfaction</li>
						<li>
							Uncover new opportunities in areas traditionally not able to
							support
						</li>
					</ul>
				</div>

				<div className="benefits-content benefits-content-2">
					<ul className="technician-benefits benefit-list">
						<li>Flexibility in hours</li>
						<li>Additional income</li>
						<li>Ability to work for yourself</li>
						<li>Immediate payment</li>
						<li>A mechanism for growth to add additional certifications</li>
					</ul>

					<img
						className="technician-image benefit-image"
						src="images/technician.jpg"
						alt="technician"
					/>
				</div>
				<div className="benefits-content benefits-content-3">
					<img
						className="customer-image benefit-image"
						src="images/city.webp"
						alt="city"
					/>

					<ul className="customer-benefits benefit-list">
						<li>Rapid resolution from on-demand techs</li>
						<li>More consistent service process</li>
						<li>Feedback request on each call to optimize network integrity</li>
						<li>
							No overcharge fee for additional hours (no 2-hour minimum)
							<small>*Partner dependent</small>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
};

export default Benefits;
