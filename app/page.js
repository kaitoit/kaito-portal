import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mt-6 space-y-16">
        <Hero />
        <Services />
        <section id="contact" className="mt-12">
          <h2 className="text-3xl font-semibold text-center mb-6">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
