const nodemailer = require("nodemailer");
const messageTemplate = require("./message");
require("dotenv").config();

const sendEmail = async (userData, messageData) => {
  const { name, email } = userData;
  const { subject, body, link } = messageData;

  const html = messageTemplate(name, body, link);

  const config = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
    tls: { rejectUnauthorized: false },
  };

  const message = {
    from: "ropaftecommerce@gmail.com",
    to: email,
    subject,
    html,
  };

  const transport = nodemailer.createTransport(config);
  const info = await transport.sendMail(message);

  return info;
};

module.exports = sendEmail;
