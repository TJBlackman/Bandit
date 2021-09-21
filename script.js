"use strict";

const navBar = document.querySelector("nav");
const navBtn = document.querySelector(".closeBtn");
const navItems = document.querySelector(".nav-items");
const navLinks = document.querySelectorAll(".nav-link");
const learnMoreBtn = document.querySelector(".learn-more");
const aboutSection = document.getElementById("about");
const year = document.getElementById("date-year");
const allSections = document.querySelectorAll(".section");
const benefitsTabs = document.querySelector(".benefits-tab-container");
const tabs = document.querySelectorAll(".benefits-tab");
const benefitsContent = document.querySelectorAll(".benefits-content");
const submitBtn = document.getElementById("form-submit");

//----------------Nav side-bar toggle------------------------

navBtn.addEventListener("click", toggleNav);

function toggleNav() {
	navBar.classList.toggle("active");
}

// --------------Smooth Scrolling from NAV bar and Learn More Button-------------------

navItems.addEventListener("click", function (e) {
	e.preventDefault();

	if (e.target.classList.contains("nav-link")) {
		const id = e.target.getAttribute("href");

		document.querySelector(id).scrollIntoView({ behavior: "smooth" }),
			toggleNav();
	}
});

learnMoreBtn.addEventListener("click", (e) => {
	aboutSection.scrollIntoView({
		behavior: "smooth",
	});
});

//-----------------Reveal Sections on Scroll --------------

function revealSections(entries, observer) {
	const [entry] = entries;

	if (!entry.isIntersecting) return;

	entry.target.classList.remove("section-hidden");

	//stop observing after loading the whole page
	observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSections, {
	root: null,
	threshold: 0.15,
});

allSections.forEach(function (section) {
	sectionObserver.observe(section);
	section.classList.add("section-hidden");
});

//-----------------Benefits Tabs----------------------
benefitsTabs.addEventListener("click", function (e) {
	const clicked = e.target.closest(".benefits-tab");

	//guard clause
	if (!clicked) return;
	//active tab
	tabs.forEach((t) => t.classList.remove("benefits-tab-active"));
	clicked.classList.add("benefits-tab-active");

	//Activate content area
	benefitsContent.forEach((c) => c.classList.remove("benefits-content-active"));
	document
		.querySelector(`.benefits-content-${clicked.dataset.tab}`)
		.classList.add("benefits-content-active");
});

//-----------------Contact Form Functionality----------------------
const form = document.getElementById("contact-form");

const formMessage = function () {
	form.innerHTML = "";
	form.innerHTML = `
	<div>
	<h2>
		Message was successfully sent!
	</h2>
	</div>
	`;
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	submitBtn.innerHTML = `
	<div>
		<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
		<path fill="#fff" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
			<animateTransform attributeType="xml"
			attributeName="transform"
			type="rotate"
			from="0 25 25"
			to="360 25 25"
			dur="0.6s"
			repeatCount="indefinite"/>
			</path>
		</svg>
	</div>
	`;
	let _name = form.querySelector(".name").value;
	let _email = form.querySelector(".email").value;
	let _subject = form.querySelector(".subject").value;
	let _message = form.querySelector("#message").value;

	const data = {
		name: _name,
		email: _email,
		subject: _subject,
		message: _message,
	};

	fetch("/.netlify/functions/send-email", {
		method: "POST",
		headers: {
			"Content-Type": "application/JSON",
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((obj) => {
			console.log(obj);
			alert("Message sent successfully!");
		})
		.then(() => {
			submitBtn.innerHTML = "Submit";
			form.reset();
		})
		.catch((err) => {
			console.log(err);
			alert(err);
		});
});

//-----------------Copyright Year in Footer--------------

year.innerText = new Date().getFullYear();
