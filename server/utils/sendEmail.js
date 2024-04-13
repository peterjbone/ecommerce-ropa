//todo:  Aprendiendo a usar nodemailer

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	service: "gmail",
	host: "smtp.gmail.com",
	port: 587,
	secure: false, // Use `true` for port 465, `false` for all other ports
	auth: {
		user: process.env.USER_EMAIL, // correo del emisor
		pass: process.env.APP_PASSWORD // Contraseña de la cuenta de Gmail
	}
});

const mailOptions = {
	from: {
		name: "Ecommerce ropa",
		address: process.env.USER_EMAIL
	}, // sender address
	to: "bar@example.com, baz@example.com", // list of receivers
	subject: "Compra realizada con éxito 😎", // Subject line
	text: "Hello world?", // plain text body
	html: "<b>Hello world?</b>", // html body
	attachments: [] // agregar documentos
};

const sendMail = async (transporter, mailOptions) => {
	try {
		await transporter.sendMail(mailOptions);
		console.log("Mail has been sent! ");
	} catch (error) {
		console.log(error);
	}
};

sendMail(transporter, mailOptions);
