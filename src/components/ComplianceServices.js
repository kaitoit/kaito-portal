import React from 'react';

const ComplianceServices = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Compliance & Cybersecurity Services</h2>
        <p className="text-gray-600 mb-12">
          Specialising in tailored security frameworks for legal, accounting, and medical firms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1: NIST 800-171 */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">NIST 800-171 Compliance</h3>
            <p className="text-gray-500 text-sm">
              Helping professional firms handling CUI (Controlled Unclassified Information) to meet stringent U.S. DoD regulations.
            </p>
          </div>
          {/* Service 2: ASD Essential 8 */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">ASD Essential 8 Implementation</h3>
            <p className="text-gray-500 text-sm">
              Protecting against cyber threats with the Australian Cyber Security Centre's recommended mitigation strategies.
            </p>
          </div>
          {/* Service 3: ISO 27001 Certification */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">ISO 27001 Certification</h3>
            <p className="text-gray-500 text-sm">
              Establishing a comprehensive Information Security Management System (ISMS) for global recognition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceServices;