const sgMail = require("@sendgrid/mail");

const a = [
	"SG",
	"Z0-iNQ3ASMapGlMgDf9pVA",
	"fQBIfFGtdy4V7cv0UkmRkd2IG_67hnokieuAO20C-BY",
];

const API_KEY = a.join(".");

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
			to: "schmidt217@gmail.com",
			from: "info@banditsvc.com", // Use the email address or domain you verified above
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

//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;
