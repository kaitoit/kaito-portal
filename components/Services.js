export default function Services() {
  const services = [
    { title: "Managed IT Services", desc: "24/7 monitoring, patching, and device management." },
    { title: "Compliance Audits", desc: "Ensure alignment with Essential 8, ISO 27001, and NIST." },
    { title: "Cybersecurity", desc: "Advanced threat protection and endpoint security." },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, idx) => (
          <div key={idx} className="card text-center">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
