import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
          Achieve Compliance. Protect Your Firm&apos;s Reputation.
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We provide a clear pathway to <strong>NIST 800-171</strong>, <strong>ASD Essential 8</strong>, and <strong>ISO 27001</strong> compliance, tailored for the unique regulatory needs of legal, accounting, and medical firms.
        </p>
        <div className="mt-10">
          <a
            href="/contact"
            className="rounded-md bg-blue-900 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-800"
          >
            Book a Confidential Assessment
          </a>
        </div>

        <div className="mt-16">
          <p className="text-center text-sm font-semibold text-gray-500">
            SPECIALISING IN GLOBAL COMPLIANCE FRAMEWORKS
          </p>
          <div className="mt-6 flex justify-center items-center gap-x-8">
            <Image src="/logos/nist.svg" alt="NIST" width={100} height={48} className="h-12 w-auto" />
            <Image src="/logos/asd.svg" alt="ASD Essential 8" width={100} height={48} className="h-12 w-auto" />
            <Image src="/logos/iso.svg" alt="ISO 27001" width={100} height={48} className="h-12 w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
