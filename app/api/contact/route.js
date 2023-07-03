import { mailOptions, transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";

function toHTMLParagraphs(text) {
  return text
    .split("\n")
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
}

export async function POST(req) {
  const data = await req.json();

  if (!data.name || !data.email || !data.message) {
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `Portfolio site mail from: ${data.name}`,
      text: data.message,
      html: `<h2>Name: ${data.name}</h2><h2>Email: ${
        data.email
      }</h2>${toHTMLParagraphs(data.message)}`,
    });

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
