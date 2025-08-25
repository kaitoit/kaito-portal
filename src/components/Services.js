// Could be on the homepage or its own /pages/services.js
function ComplianceServices() {
  const services = [
    {
      name: "NIST SP 800-171",
      description: "Protect Controlled Unclassified Information (CUI) and meet US Department of Defense and government contract requirements.",
      href: "/services/nist-800-171",
    },
    {
      name: "ASD Essential 8 - Maturity 3",
      description: "Implement the Australian Cyber Security Centre's highest maturity level for a proactive defence against advanced threats.",
      href: "/services/asd-essential-8",
    },
    {
      name: "ISO 27001 Certification",
      description: "Establish a globally recognised Information Security Management System (ISMS) to build ultimate client trust.",
      href: "/services/iso-27001",
    },
  ];

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Our Core Compliance Expertise
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We focus exclusively on the frameworks that matter to regulated professions.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.name} className="bg-white p-8 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
              <p className="mt-3 text-base text-gray-600">{service.description}</p>
              <a href={service.href} className="mt-6 inline-block font-semibold text-blue-800 hover:text-blue-700">
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComplianceServices;