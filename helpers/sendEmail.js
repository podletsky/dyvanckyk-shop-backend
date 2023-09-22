const nodemailer = require("nodemailer");
require("dotenv").config();

const { PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "podletsky@meta.ua",
    pass: PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = (data) => {
  const mail = { ...data, from: "podletsky@meta.ua" };
  transport
    .sendMail(mail)
    .then(console.log("send email success"))
    .catch((err) => console.log(err.message));
};

const emailData = {
  to: "podletsky@meta.ua",
  subject: "Тема листа",
  text: "Текст листа",
};

sendEmail(emailData);
module.exports = sendEmail;
