import { FormEvent, useState } from "react";
import { GoldDivider } from "../components/GoldDivider";

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!name.trim() || !subject.trim() || !message.trim()) {
      setError("Please complete every field.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSuccess(true);
  }

  return (
    <section className="page-block contact-page">
      <img
        className="deco deco--page-spark"
        src="/assets/decorations/gold-stars-scattered.png"
        alt=""
      />
      <p className="meta">CYBERSPLASH</p>
      <h1>Contact</h1>
      <GoldDivider variant="ornate" />
      <p className="page-intro">
        Write to the edit. Collaborations, notes, and styling questions are always welcome.
      </p>
      <div className="contact-details">
        <p>
          <strong>Sample studio</strong>
          <br />
          14 Atelier Lane, Suite 2
          <br />
          (placeholder address)
        </p>
        <p>
          <strong>Desk hours</strong>
          <br />
          Mon–Fri, 10:00–18:00
          <br />
          Sample hours for review
        </p>
        <p>
          <strong>Press</strong>
          <br />
          press@cybersplash.com
        </p>
      </div>
      {success ? (
        <p className="form-success" role="status">
          Thank you, {name}. Your message has been received — we will be in touch.
        </p>
      ) : (
        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <label htmlFor="c-name">Name</label>
          <input id="c-name" value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="c-email">Email</label>
          <input
            id="c-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="c-subject">Subject</label>
          <input id="c-subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <label htmlFor="c-message">Message</label>
          <textarea
            id="c-message"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send message</button>
          {error ? (
            <p className="form-error" role="alert">
              {error}
            </p>
          ) : null}
        </form>
      )}
      <ul className="contact-social">
        <li>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </li>
        <li>
          <a href="mailto:hello@cybersplash.com">hello@cybersplash.com</a>
        </li>
      </ul>
    </section>
  );
}
