const serviceData = [
  {
    title: "Threat Intelligence",
    description: "Proactive identification and analysis of emerging cyber threats to prevent attacks before they materialize."
  },
  {
    title: "Compliance & Audit",
    description: "Navigating complex international regulations with precision to ensure your organization meets all compliance standards."
  },
  {
    title: "Incident Response",
    description: "Rapid deployment of elite teams to contain, eradicate, and recover from security breaches with minimal disruption."
  }
];

export default function Services() {
  return (
    <section id="services">
      <h2 className="text-3xl font-bold text-center mb-2 font-mono text-gray-400">Our Services</h2>
      <div className="service-matrix">
        {serviceData.map((service, index) => (
          <div key={index} className="ui-panel service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}