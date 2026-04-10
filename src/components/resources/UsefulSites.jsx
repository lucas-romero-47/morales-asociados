import { ExternalLink } from 'lucide-react';
import { USEFUL_SITES } from '../../data/resources';
import './UsefulSites.css';

export default function UsefulSites() {
  return (
    <section className="useful-sites" id="useful-sites">
      <div className="section-title">
        <h2>Sitios Web de Consulta</h2>
      </div>
      <p className="useful-sites-intro">
        Enlaces directos a los organismos y portales más importantes para el contribuyente argentino.
      </p>

      <div className="useful-sites-grid">
        {USEFUL_SITES.map((site) => (
          <a
            href={site.url}
            className="useful-site-card"
            key={site.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="useful-site-header">
              <h3 className="useful-site-name">{site.name}</h3>
              <ExternalLink size={16} />
            </div>
            <p className="useful-site-description">{site.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
