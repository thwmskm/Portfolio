import styles from "./Contact.module.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); //prevent page reload
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Something went wrong, please try again.");
        }
      );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftSect}>
          <div className={styles.wrapper}>
            <img src="/h2.jpg" alt="Home Image 1" className={styles.img}></img>
            <p className={styles.caption}>Old City Hall, Toronto, Canada</p>
          </div>
        </div>
        <div className={styles.rightSect}>
          <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <label>Name</label>
            <input type="text" name="name" required />

            <label>Email</label>
            <input type="email" name="email" required />

            <label>Message</label>
            <textarea name="message" rows="10" required />

            <button type="submit" data-cursor="link">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
