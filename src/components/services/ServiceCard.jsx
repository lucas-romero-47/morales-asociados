import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import * as Icons from 'lucide-react';
import './ServiceCard.css';

export default function ServiceCard({ service, isExpanded, onToggle }) {
  const IconComponent = Icons[service.icon];

  return (
    <article className={`svc-card ${isExpanded ? 'svc-card-expanded' : ''}`} id={service.id}>
      <div className="svc-card-header" onClick={onToggle} role="button" tabIndex={0} aria-expanded={isExpanded}>
        <div className="svc-card-icon">
          {IconComponent && <IconComponent size={28} />}
        </div>
        <div className="svc-card-header-text">
          <h3 className="svc-card-title">{service.title}</h3>
          <p className="svc-card-short">{service.shortDescription}</p>
        </div>
        <ArrowRight size={20} className={`svc-card-arrow ${isExpanded ? 'svc-card-arrow-rotated' : ''}`} />
      </div>

      {isExpanded && (
        <div className="svc-card-detail">
          <p className="svc-card-description">{service.fullDescription}</p>
          <ul className="svc-card-items">
            {service.items.map((item) => (
              <li key={item} className="svc-card-item">
                <CheckCircle size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link to="/contacto" className="btn btn-accent svc-card-cta">
            Solicitar asesoramiento
            <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </article>
  );
}
