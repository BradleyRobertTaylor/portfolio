"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";
import styles from "./contactme.module.css";

export default function ContactMe() {
  function getErrorColor(formik, prop) {
    if (formik.touched[prop] && !formik.errors[prop]) {
      return "green";
    }

    if (formik.touched[prop] && formik.errors[prop]) {
      return "red";
    }

    return "";
  }

  return (
    <section id="contact" className={styles["contact-me-section"]}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: [0.1, 0.25, 0.3, 1],
            duration: 1,
            delay: 0.5,
          }}
          className={styles["section-head"]}
        >
          <h2 className={`${styles.title}`}>Contact</h2>
          <p>
            Get in touch with me here or shoot me an email at{" "}
            <Link target="_blank" href="mailto:taylorbradleyr@gmail.com">
              taylorbradleyr@gmail.com
            </Link>
          </p>
        </motion.div>
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
          onSubmit={async ({ name, email, message }, { resetForm }) => {}}
        >
          {(formik) => (
            <motion.form
              onSubmit={formik.handleSubmit}
              className={styles["form-container"]}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: [0.1, 0.25, 0.3, 1],
                duration: 1,
                delay: 1,
              }}
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
            </motion.form>
          )}
        </Formik>
      </div>
    </section>
  );
}
