"use client";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";
import styles from "./contactme.module.css";

export default function ContactMe() {
  function getErrorColor(formik, prop) {
    if (formik.touched[prop] && !formik.errors[prop]) {
      return "green";
    } else if (formik.touched[prop] && formik.errors[prop]) {
      return "red";
    } else {
      return "";
    }
  }

  return (
    <section id="contact" className={styles["contact-me-section"]}>
      <div className={styles.container}>
        <div className={styles["section-head"]}>
          <h2 className={`${styles.title}`}>Contact</h2>
          <p>
            Get in touch with me here or shoot me an email at{" "}
            <a target="_blank" href="mailto:taylorbradleyr@gmail.com">
              taylorbradleyr@gmail.com
            </a>
          </p>
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(40, "Must be 40 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            message: Yup.string().required("Required"),
          })}
          onSubmit={async ({ name, email, message }, { resetForm }) => {
            console.log("Sending");

            const data = {
              name,
              email,
              message,
            };

            console.log(data);

            const req = await fetch("/api/email", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });

            const res = await req.json();

            if (res.status === 200) {
              console.log(res);
              resetForm();
            }
          }}
        >
          {(formik) => (
            <form
              onSubmit={formik.handleSubmit}
              className={styles["form-container"]}
            >
              <div className={styles["floating-name-group"]}>
                <Field
                  required
                  style={{
                    borderColor: getErrorColor(formik, "name"),
                  }}
                  name="name"
                  id="name"
                  type="text"
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className={styles["floating-name-group"]}>
                <Field
                  required
                  style={{
                    borderColor: getErrorColor(formik, "email"),
                  }}
                  type="text"
                  name="email"
                  id="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className={styles["floating-name-group"]}>
                <Field
                  as="textarea"
                  required
                  style={{
                    borderColor: getErrorColor(formik, "message"),
                  }}
                  rows="8"
                  type="text"
                  id="message"
                  name="message"
                />
                <label htmlFor="message">How can I help?</label>
              </div>
              <Button type="submit" text="Send Message" />
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
}
