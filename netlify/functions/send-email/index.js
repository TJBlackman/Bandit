const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(API_KEY);

exports.handler = async function (event, context) {
	try {
		if (event.httpMethod !== "POST") {
			throw new Error(
				`Expecting a POST request, but received a ${event.httpMethod} request instead.`
			);
		}
		if (!event.body) {
			throw new Error("Body is empty. Are you trying to send an email?");
		}

		const data = JSON.parse(event.body);

		if (!data.name) {
			throw new Error("Name is required!");
		}

		const textMessage = `
        A new form was submitted by ${data.email}.
        Message: ${data.message}
        `;

		const htmlMessage = `
            <p>A new form was submitted by ${data.email}.</p>
            <p> Message: <br/> ${data.message}</p>
        `;

		const email = {
			to: "info@banditsvc.com",
			from: "info@banditsvc.com",
			subject: `New Contact Form: ${data.subject}`,
			text: textMessage,
			html: htmlMessage,
		};

		await sgMail.send(email);
		return {
			statusCode: 200,
			body: JSON.stringify({ success: true }),
		};
	} catch (error) {
		alert(error);
		return {
			body: JSON.stringify({ success: false, message: error }),
		};
	}
};
