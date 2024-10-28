import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact_section}>
      <form className={styles.contact_form}>
        <h2 className={styles.form_title}>Contact me</h2>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" name="name" placeholder="name" />
        <label htmlFor="subject">Subject:</label>
        <input id="subject" type="text" name="subject" placeholder="subject" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="message..." />
        <button className={styles.form_button}>Submit</button>
      </form>
    </section>
  );
}
