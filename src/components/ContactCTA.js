import React from 'react';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Firm?</h2>
        <p className="text-lg mb-8">
          Contact us today for a free consultation and a customised security plan.
        </p>
        <a 
          href="/contact" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;