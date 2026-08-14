import { FormEvent, useState } from "react";

export function Newsletter() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!firstName.trim()) {
      setError("Please enter your first name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSuccess(true);
  }

  return (
    <section className="newsletter">
      <p className="newsletter__lead">
        Unlock a world of luxury fashion, expert styling tips, and exclusive updates
      </p>
      {success ? (
        <p className="form-success" role="status">
          Thank you, {firstName}. You are on the list for the next CyberSplash edit.
        </p>
      ) : (
        <form className="newsletter-form" onSubmit={onSubmit} noValidate>
          <label className="sr-only" htmlFor="nl-first">
            First name
          </label>
          <input
            id="nl-first"
            name="firstName"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="given-name"
          />
          <label className="sr-only" htmlFor="nl-email">
            Email Address
          </label>
          <input
            id="nl-email"
            name="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <button type="submit">Subscribe</button>
          {error ? (
            <p className="form-error" role="alert">
              {error}
            </p>
          ) : null}
        </form>
      )}
    </section>
  );
}
