import React from 'react';
import Image from 'next/image';

// A new component, perhaps for the homepage at /pages/index.js

function Hero() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
          Achieve Compliance. Protect Your Firm&apos;s Reputation.
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We provide a clear pathway to **NIST 800-171**, **ASD Essential 8**, and **ISO 27001** compliance, tailored for the unique regulatory needs of legal, accounting, and medical firms.
        </p>
        <div className="mt-10">
          <a
            href="/contact"
            className="rounded-md bg-blue-900 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-800"
          >
            Book a Confidential Assessment
          </a>
        </div>
        
        {/* Trust badges are critical here */}
        <div className="mt-16">
          <p className="text-center text-sm font-semibold text-gray-500">
            SPECIALISING IN GLOBAL COMPLIANCE FRAMEWORKS
          </p>
          <div className="mt-6 flex justify-center items-center gap-x-8">
            <Image className="h-12" src="/logos/nist-logo.svg" alt="NIST" width={100} height={48} />
            <Image className="h-12" src="/logos/asd-logo.svg" alt="ASD Essential 8" width={100} height={48} />
            <Image className="h-12" src="/logos/iso-27001-logo.svg" alt="ISO 27001" width={100} height={48} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;