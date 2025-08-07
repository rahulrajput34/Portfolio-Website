import nodemailer from "nodemailer";
import config from "./config";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: config.env.nodemailer.email,
    pass: config.env.nodemailer.password,
  },
});

export const defaultMailOptions = {
  from: `"Portfolio contact" <${config.env.nodemailer.email}>`,
  to: config.env.nodemailer.email,
};
