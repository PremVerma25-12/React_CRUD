import './Service.css';

const Service = () => {
  const services = [
    { id: 1, title: 'Web Development', description: 'Building responsive and modern websites.' },
    { id: 2, title: 'App Development', description: 'Creating mobile apps for Android and iOS.' },
    { id: 3, title: 'UI/UX Design', description: 'Designing user-friendly and beautiful interfaces.' },
    { id: 4, title: 'Digital Marketing', description: 'Helping your brand grow with SEO & Ads.' },
  ];

  return (
    <div className="service-container">
      <h1>Our Services</h1>
      <div className="service-list">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
