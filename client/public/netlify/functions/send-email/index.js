const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");
dotenv.config();

const api_key = process.env.API_KEY;

sgMail.setApiKey(api_key);

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
		A new form was submitted by ${data.name} via ${data.email}.
		Contact number: ${data.phone}
        Message: ${data.message}
        `;

		const htmlMessage = `
			<p> A new form was submitted from ${data.name} via ${data.email}.</p>
			<p> Contact number: ${data.phone} </p>
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
		console.log(error);
		return {
			body: JSON.stringify({ success: false, message: error }),
		};
	}
};
