import { Link } from 'react-router-dom';
import { ArrowRight, Receipt, Users, TrendingUp, Building2 } from 'lucide-react';
import { FEATURED_SERVICES } from '../../data/services';
import './ServicesPreview.css';

const ICON_MAP = { Receipt, Users, TrendingUp, Building2 };

export default function ServicesPreview() {
  return (
    <section className="services-preview section" id="services-preview">
      <div className="container">
        <div className="section-title">
          <h2>Áreas de Especialización</h2>
        </div>

        <div className="services-preview-grid">
          {FEATURED_SERVICES.map(({ id, icon, title, shortDescription }) => {
            const IconComponent = ICON_MAP[icon];
            return (
              <div className="service-preview-card" key={id}>
                <div className="service-preview-icon">
                  {IconComponent && <IconComponent size={32} />}
                </div>
                <h3 className="service-preview-title">{title}</h3>
                <p className="service-preview-description">{shortDescription}</p>
                <Link to={`/servicios#${id}`} className="btn btn-primary service-preview-btn">
                  Más información
                  <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="services-preview-footer">
          <Link to="/servicios" className="btn btn-outline">
            Ver todos los servicios
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
