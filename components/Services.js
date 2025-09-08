export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">NIST SP 800-171</h3>
            <p className="mt-2 text-gray-600">Protect Controlled Unclassified Information (CUI) and meet DoD requirements.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">ASD Essential 8</h3>
            <p className="mt-2 text-gray-600">Implement the highest maturity level for proactive defence against advanced threats.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">ISO 27001</h3>
            <p className="mt-2 text-gray-600">Build ultimate client trust with a globally recognised ISMS.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
