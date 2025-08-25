import Head from 'next/head';

// Import the rebuilt, professional components
import Header from '../components/Header';
import Hero from '../components/Hero';
import ComplianceServices from '../components/ComplianceServices';
import Footer from '../components/Footer';
import ContactCTA from '../components/ContactCTA'; // A new, simple CTA component

// This is the main homepage component
function HomePage() {
  return (
    <>
      <Head>
        <title>Kaito IT | Compliance & Cybersecurity for Professional Firms</title>
        <meta 
          name="description" 
          content="Specialising in NIST 800-171, ASD Essential 8, and ISO 27001 compliance for legal, accounting, and medical firms." 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white">
        <Header />
        <main>
          <Hero />
          <ComplianceServices />
          {/* We can add a call-to-action section before the footer */}
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;