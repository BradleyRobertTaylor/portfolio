import { EMAIL } from "@/data/constants";
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export const mailOptions = {
  from: EMAIL,
  to: EMAIL,
};
