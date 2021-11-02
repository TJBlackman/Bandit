import React, { useRef } from "react";

const Contact = () => {
	const formRef = useRef();
	const nameRef = useRef();
	const emailRef = useRef();
	const phoneRef = useRef();
	const subjectRef = useRef();
	const messageRef = useRef();
	const submitRef = useRef("Submit");

	const submitEmail = (e) => {
		e.preventDefault();
		submitRef.current.innerHTML = `
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

		let _name = nameRef.current.value;
		let _email = emailRef.current.value;
		let _phone = phoneRef.current.value;
		let _subject = subjectRef.current.value;
		let _message = messageRef.current.value;

		const data = {
			name: _name,
			email: _email,
			phone: _phone,
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
				submitRef.current.innerHTML = "Submit";
				formRef.reset();
			})
			.catch((err) => {
				console.log(err);
				alert(err);
			});
	};

	return (
		<div id="contact" className="section-holder odd-section">
			<section className="section">
				<h2>Contact Us!</h2>
				<p>For more information or if you have any questions please ask!</p>
				<hr />
				<div className="contact-row">
					<div className="contact-column">
						<form ref={formRef}>
							<input
								type="text"
								className="input-search name"
								name="name"
								placeholder="Name"
								ref={nameRef}
								required
							/>

							<input
								type="email"
								className="input-search email"
								name="email"
								placeholder="Email"
								ref={emailRef}
								required
							/>

							<input
								type="text"
								className="input-search subject"
								placeholder="Subject"
								ref={subjectRef}
								required
							/>

							<input
								type="tel"
								className="input-search phone"
								name="phone"
								placeholder="Phone Number"
								ref={phoneRef}
								required
							/>

							<textarea
								name="message"
								className="input-search"
								cols="30"
								rows="10"
								placeholder="Message"
								id="message"
								ref={messageRef}
							></textarea>
							<button id="form-submit" ref={submitRef} onClick={submitEmail}>
								Submit
							</button>
						</form>
					</div>
					<div className="contact-column-2">
						<h3>Contact Information</h3>
						<h4>Location</h4>
						<p className="location">
							12600 Hill Country Blvd Suite R-275, <br />
							Bee Cave, TX 78738
						</p>
						<h4>Email</h4>
						<p className="our-email">info@banditsvc.com</p>
						<h4>Call Us</h4>
						<p className="call">+1 (512) 827-1888</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
