"use server";

import { ContactFormInputs } from "@/components/ContactForm";
import { mailOptions, transporter } from "@/lib/nodemailer";
import { toHTMLParagraphs } from "@/lib/utils";

export const sendContactForm = async ({
  name,
  message,
  email,
}: ContactFormInputs) => {
  transporter.sendMail({
    ...mailOptions,
    subject: `Portfolio site mail from: ${name}`,
    text: message,
    html: `<h2>Name: ${name}</h2><h2>Email: ${email}</h2>${toHTMLParagraphs(
      message,
    )}`,
  });
};
