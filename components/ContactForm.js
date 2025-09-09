"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="card">
      {submitted ? (
        <p className="text-green-700 font-medium">Thank you! We’ll get back to you soon.</p>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="How can we help?" rows={4} required></textarea>
          <button type="submit" className="primary">Send Message</button>
        </form>
      )}
    </div>
  );
}
