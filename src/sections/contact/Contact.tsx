import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_eq8totl",
        "template_q2gt7gv",
        form,
        "tfpDX-dMQrZWYpq-l"
      );
      setStatus("Message sent successfully!");
      setForm({ name: "", subject: "", message: "" });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: unknown) {
      setStatus("Failed to send message. Try again later.");
    }
  };

  return (
    <section id="contact" className={styles.contact_section}>
      <form className={styles.contact_form} onSubmit={handleSubmit}>
        <h2 className={styles.form_title}>Contact me</h2>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="name"
          value={form.name}
          onChange={handleChange}
        />
        <label htmlFor="subject">Subject:</label>
        <input
          id="subject"
          type="text"
          name="subject"
          placeholder="subject"
          value={form.subject}
          onChange={handleChange}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="message..."
          value={form.message}
          onChange={handleChange}
        />
        <button type="submit" className={styles.form_button}>
          Submit
        </button>
        {status && <p>{status}</p>}
      </form>
    </section>
  );
}
