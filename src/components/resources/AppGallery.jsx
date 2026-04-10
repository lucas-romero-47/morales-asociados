import { ExternalLink, Play } from 'lucide-react';
import { APPS } from '../../data/resources';
import './AppGallery.css';

export default function AppGallery() {
  return (
    <section className="app-gallery" id="app-gallery">
      <div className="section-title">
        <h2>Aplicaciones Móviles Recomendadas</h2>
      </div>
      <p className="app-gallery-intro">
        Herramientas oficiales que te ayudarán a gestionar tus obligaciones fiscales desde el celular.
      </p>

      <div className="app-gallery-grid">
        {APPS.map((app) => (
          <div className="app-card" key={app.id}>
            <div className="app-card-icon">{app.icon}</div>
            <h3 className="app-card-name">{app.name}</h3>
            <p className="app-card-description">{app.description}</p>
            <a href={app.videoUrl} className="app-card-link" target="_blank" rel="noopener noreferrer">
              <Play size={14} />
              Ver video tutorial
              <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
