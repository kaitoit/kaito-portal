import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ticket submitted! (Placeholder logic)");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
        <label htmlFor="name">Name</label><br />
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br /><br />

        <label htmlFor="email">Email</label><br />
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />

        <label htmlFor="message">Message</label><br />
        <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea><br /><br />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
