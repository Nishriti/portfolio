import { useState } from "react";

// A contact form. This is frontend-only for now — it just shows a
// "message sent" note. To actually send emails, connect it later to
// a form service (like Formspree) or your own backend.
export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", phone: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">Ready to start your next project? Get in touch.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required />

        <label htmlFor="phone">Contact number</label>
        <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} required />

        <button type="submit">Send message</button>

        {sent && <p className="contact-status">Thanks — your message has been noted!</p>}
      </form>
    </section>
  );
}
