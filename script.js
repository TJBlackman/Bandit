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

//-----------------Copyright Year in Footer--------------

year.innerText = new Date().getFullYear();
