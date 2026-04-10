import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SERVICES } from '../data/services';
import ServiceCard from '../components/services/ServiceCard';
import './ServicesPage.css';

export default function ServicesPage() {
  const [expandedId, setExpandedId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setExpandedId(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [location.hash]);

  const handleToggle = (serviceId) => {
    setExpandedId(prev => prev === serviceId ? null : serviceId);
  };

  return (
    <main id="services-page">
      <div className="page-header">
        <div className="container">
          <div className="section-title">
            <h2>Nuestros Servicios</h2>
          </div>
          <p className="page-header-subtitle">
            Ofrecemos un catálogo integral de servicios contables, impositivos, laborales y societarios 
            para acompañar el crecimiento de tu empresa.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="services-list">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isExpanded={expandedId === service.id}
                onToggle={() => handleToggle(service.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
