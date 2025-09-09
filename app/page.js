"use client";
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    setTimeout(() => {
      console.log('Form Data:', formData);
      setStatus('Success! Your message has been sent. We will be in touch shortly.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-transparent backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-800 rounded-2xl p-8 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[var(--color-dark-secondary)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[var(--color-dark-secondary)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)]"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">How can we help?</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            className="w-full p-3 rounded-lg bg-[var(--color-dark-secondary)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)]"
          ></textarea>
        </div>
        <button type="submit" className="btn btn--primary w-full">Send Inquiry</button>
      </form>
      {status && (
        <p className="mt-4 text-center text-sm font-semibold" style={{ color: status.startsWith('Success') ? 'var(--accent-primary)' : 'var(--color-text-secondary)' }}>
          {status}
        </p>
      )}
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="ui-panel service-card transition-transform transform hover:translate-y-[-8px]">
    <div className="text-3xl mb-4 text-[var(--accent-primary)]">{icon}</div>
    <h3 className="service-title text-xl font-mono mb-2">{title}</h3>
    <p className="service-description text-[var(--color-text-secondary)]">{description}</p>
  </div>
);

const Header = () => (
  <header className="header-main flex justify-between items-center">
    <div className="flex items-center space-x-4">
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/" className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-[var(--color-text-primary)] font-mono">AXIOM</span>
        <span className="text-lg font-bold text-[var(--accent-primary)]">&lt; /&gt;</span>
      </a>
    </div>
    <nav className="space-x-8 hidden md:flex">
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/" className="hover:text-[var(--accent-primary)] transition-colors">Home</a>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/about" className="hover:text-[var(--accent-primary)] transition-colors">About</a>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/resources" className="hover:text-[var(--accent-primary)] transition-colors">Resources</a>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/contact" className="hover:text-[var(--accent-primary)] transition-colors">Contact</a>
    </nav>
    <a href="/contact" className="btn btn--primary hidden md:block">Get Started</a>
  </header>
);

const Footer = () => (
  <footer className="footer-main mt-auto">
    <p>&copy; {new Date().getFullYear()} Project AXIOM. All Rights Reserved.</p>
  </footer>
);

const Hero = () => (
  <section className="text-center py-24 md:py-40">
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
      Sovereign Digital Fortification
    </h1>
    <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-12">
      We are the architects of digital security, engineering cryptographic solutions that protect the world&apos;s most critical assets.
    </p>
    <div>
      <a href="/contact" className="btn btn--primary pulse-border-animation">
        Secure a Consultation
      </a>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 mt-6 space-y-16">
        <Hero />
        <section id="services" className="py-16 md:py-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[var(--color-text-primary)] tracking-tight">
            Our Core Protocols
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon="🔒"
              title="Threat Analytics"
              description="Proactive scanning and analysis to neutralize threats before they can compromise your infrastructure."
            />
            <ServiceCard
              icon="🔑"
              title="Identity Assurance"
              description="Deploying multi-factor authentication and access controls to secure every entry point."
            />
            <ServiceCard
              icon="🛡️"
              title="Compliance Engineering"
              description="Building bespoke compliance frameworks for ISO 27001, NIST, and GDPR to ensure regulatory integrity."
            />
            <ServiceCard
              icon="🕵️"
              title="Incident Response"
              description="Rapid deployment of elite response teams to contain and remediate security breaches."
            />
            <ServiceCard
              icon="🧠"
              title="Vulnerability Assessment"
              description="Deep-dive security audits and penetration testing to identify and patch system weaknesses."
            />
            <ServiceCard
              icon="📊"
              title="Risk Management"
              description="Strategic risk profiling and mitigation planning to safeguard your firm's continuity."
            />
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[var(--color-text-primary)] tracking-tight">
            Initiate Secure Dialogue
          </h2>
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
