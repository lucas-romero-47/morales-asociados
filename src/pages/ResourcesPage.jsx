import AppGallery from '../components/resources/AppGallery';
import UsefulSites from '../components/resources/UsefulSites';
import VideoLibrary from '../components/resources/VideoLibrary';

export default function ResourcesPage() {
  return (
    <main id="resources-page">
      <div className="page-header">
        <div className="container">
          <div className="section-title">
            <h2>Sitios y Apps de Interés</h2>
          </div>
          <p className="page-header-subtitle">
            Recursos digitales, aplicaciones y sitios web que te ayudarán a gestionar tus obligaciones fiscales.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <AppGallery />
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <UsefulSites />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <VideoLibrary />
        </div>
      </section>
    </main>
  );
}
